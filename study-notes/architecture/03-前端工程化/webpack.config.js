const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // 入口文件
  output: { // 最好使用绝对路径
    path: path.join(__dirname, 'dist'),
    filename: 'dist.[hash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 表示参考的模板
      filename: 'index.html',  // 表示导出文件的名称
      hash: true,
      // minify: {
      //   removeAttributeQuotes: true, // 去掉html文件中的引号
      //   collapseWhitespace: true // 对html文件进行压缩
      // }
    })
  ]
}