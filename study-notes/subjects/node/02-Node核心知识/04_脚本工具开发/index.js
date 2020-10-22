#!/usr/bin/env node

const program = require('commander')

// 查看版本号
program.version(require('./package.json').version)

program.parse(process.argv)