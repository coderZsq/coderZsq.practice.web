/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const webpackOptionsSchema = require("../schemas/WebpackOptions.json");
const Compiler = require("./Compiler");
const MultiCompiler = require("./MultiCompiler");
const WebpackOptionsApply = require("./WebpackOptionsApply");
const {
	applyWebpackOptionsDefaults,
	applyWebpackOptionsBaseDefaults
} = require("./config/defaults");
const { getNormalizedWebpackOptions } = require("./config/normalization");
const NodeEnvironmentPlugin = require("./node/NodeEnvironmentPlugin");
const validateSchema = require("./validateSchema");

/** @typedef {import("../declarations/WebpackOptions").WebpackOptions} WebpackOptions */
/** @typedef {import("./Compiler").WatchOptions} WatchOptions */
/** @typedef {import("./MultiCompiler").MultiCompilerOptions} MultiCompilerOptions */
/** @typedef {import("./MultiStats")} MultiStats */
/** @typedef {import("./Stats")} Stats */

/**
 * @template T
 * @callback Callback
 * @param {Error=} err
 * @param {T=} stats
 * @returns {void}
 */

/**
 * @param {WebpackOptions[]} childOptions options array
 * @param {MultiCompilerOptions} options options
 * @returns {MultiCompiler} a multi-compiler
 */
const createMultiCompiler = (childOptions, options) => {
	const compilers = childOptions.map(options => createCompiler(options));
	const compiler = new MultiCompiler(compilers, options);
	for (const childCompiler of compilers) {
		if (childCompiler.options.dependencies) {
			compiler.setDependencies(
				childCompiler,
				childCompiler.options.dependencies
			);
		}
	}
	return compiler;
};

/**
 * @param {WebpackOptions} rawOptions options object
 * @returns {Compiler} a compiler
 */
const createCompiler = rawOptions => {
	// 创建compiler对象
	const options = getNormalizedWebpackOptions(rawOptions);
	applyWebpackOptionsBaseDefaults(options);

	// 1.这里通过new创建Compiler对象
	const compiler = new Compiler(options.context);
	compiler.options = options;
	new NodeEnvironmentPlugin({
		infrastructureLogging: options.infrastructureLogging
	}).apply(compiler);

	// 2.注册所有的插件(传入的plugins)
	if (Array.isArray(options.plugins)) {
		for (const plugin of options.plugins) {
			if (typeof plugin === "function") {
				// 如果plugin是一个函数, 那么通过call调用plugin, 并且传入compiler
				// 第一个参数是this绑定值, 第二个是传入的参数
				plugin.call(compiler, compiler);
			} else {
				// 如果plugin是一个对象, 调用apply方法, 并且传入compiler
				plugin.apply(compiler);
			}
		}
	}
	applyWebpackOptionsDefaults(options);

	// 3.调用钩子environment和afterEnvironment的call()
	// tapable
	compiler.hooks.environment.call();
	compiler.hooks.afterEnvironment.call();

	// 4.process用于处理 config文件中除了plugins的其他属性
	// 比如entry/output/devtool等等
	// 进入查看一下
	new WebpackOptionsApply().process(options, compiler);
	compiler.hooks.initialize.call();
	return compiler;
};

/**
 * @callback WebpackFunctionSingle
 * @param {WebpackOptions} options options object
 * @param {Callback<Stats>=} callback callback
 * @returns {Compiler} the compiler object
 */

/**
 * @callback WebpackFunctionMulti
 * @param {WebpackOptions[] & MultiCompilerOptions} options options objects
 * @param {Callback<MultiStats>=} callback callback
 * @returns {MultiCompiler} the multi compiler object
 */

const webpack = (options, callback) => {
	const create = () => {
		validateSchema(webpackOptionsSchema, options);
		/** @type {MultiCompiler|Compiler} */
		// 1.定义compiler
		let compiler;
		let watch = false;
		/** @type {WatchOptions|WatchOptions[]} */
		let watchOptions;
		if (Array.isArray(options)) {
			/** @type {MultiCompiler} */
			compiler = createMultiCompiler(options, options);
			watch = options.some(options => options.watch);
			watchOptions = options.map(options => options.watchOptions || {});
		} else {
			/** @type {Compiler} */
			// 2.创建compiler
			compiler = createCompiler(options);
			watch = options.watch;
			watchOptions = options.watchOptions || {};
		}
		return { compiler, watch, watchOptions };
	};

	// 判断有没有传入callback
	// 无论如何都会最终返回compiler对象
	// compiler对象是webpack的核心对象之一, 另外一个是compilation
	if (callback) {
		try {
			const { compiler, watch, watchOptions } = create();
			if (watch) {
				compiler.watch(watchOptions, callback);
			} else {
				compiler.run((err, stats) => {
					compiler.close(err2 => {
						callback(err || err2, stats);
					});
				});
			}
			// 最终都会返回compiler对象
			return compiler;
		} catch (err) {
			process.nextTick(() => callback(err));
			return null;
		}
	} else {
		const { compiler, watch } = create();
		if (watch) {
			util.deprecate(
				() => {},
				"A 'callback' argument need to be provided to the 'webpack(options, callback)' function when the 'watch' option is set. There is no way to handle the 'watch' option without a callback.",
				"DEP_WEBPACK_WATCH_WITHOUT_CALLBACK"
			)();
		}
		return compiler;
	}
};

module.exports = webpack;
