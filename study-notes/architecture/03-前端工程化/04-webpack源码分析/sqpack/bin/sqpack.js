#! /usr/bin/env node
// npm link

const path = require('path')
const root = process.cwd()
const configPath = path.join(root, 'webpack.config.js')
const config = require(configPath)
// 我们需要通过一个Compier对象来编译
let Compier = require('../lib/Compier.js')
let compier = new Compier(config)
// compier是继承对应的tapable
compier.hooks.entryOption.call(config)
compier.run()