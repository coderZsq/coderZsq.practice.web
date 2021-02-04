const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'js/bundle.js',
    // 必须是一个绝对路径
    path: path.resolve(__dirname, './build'),
    // assetModuleFilename: 'img/[name].[hash:6][ext]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'coderZsq webpack',
    })
  ]
}