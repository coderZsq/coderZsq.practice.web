const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const HappyPack = require('happypack')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    publicPath: 'http://localhost:8080'
  },
  devServer: {
    open: true,
    hot: true
  },
  // 监听对应的文件的变化, 当文件发生变化后, 我们需要重新自动打包
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000, // 表示一秒内询问1000次是否发生了变化
    aggregateTimeout: 500,
  },
  // 当解析某一个模块的时候就会使用它处理
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      node: path.resolve('./lib/fetch/node.js')
    },
    mainFields: ['main', 'node', 'browser'],
    modules: [path.resolve('node_modules'), path.resolve('lib')]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: [
        //   { loader: 'babel-loader', options: { preset: ['env', 'stage-0'] } }
        // ]
        // use: 'babel-loader'
        use: 'happypack/loader?id=babel'
      },
      {
        test: /\.css$/,
        // use: [
        //   { loader: 'style-loader' },
        //   { loader: 'css-loader' }
        // ]
        use: 'happypack/loader?id=css'
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DllReferencePlugin({
      manifest: path.join(__dirname, 'dist', 'manifest.json')
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader']
    }),
    new HappyPack({
      id: 'css',
      loaders: ['style-loader', 'css-loader']
    }),
    new WebpackParallelUglifyPlugin({
      workerCount: 3,
      uglifyJS: { // 表示开启的线程数
        output: {
          beautify: true, // 文件是否压缩
          comments: false // 是否删除注释
        },
        compress: {
          // warnings: false, // 表示删除没用到的代码不输出警告
          drop_console: true, // 删除所有的console
          collapse_vars: true, // 内嵌了一个只用到一次的变量
          reduce_vars: true // 提取出现多次但是没有定义成变量去引用的静态变量
        }
      }
    })
  ]

}