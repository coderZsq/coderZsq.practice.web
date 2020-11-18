#!/usr/bin/env node
// $ npm link
// $ npm publish --access public
// $ npm unpublish @coderzsq/npm-clear@1.0.0

const program = require('commander')

const helpOptions = require('./lib/core/help')
const createCommands = require('./lib/core/create')

// 查看版本号
program.version(require('./package.json').version)

// 帮助和可选信息
helpOptions()

// 创建其他指令
createCommands()

program.parse(process.argv)