const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')

let other = ''; // 我们需要加载哪一个文件
if (process.env.NODE_ENV == 'development') {
  other = require('./webpack.dev.config.js')
} else {
  other = require('./webpack.pro.config.js')
}

module.exports = merge(base, other)