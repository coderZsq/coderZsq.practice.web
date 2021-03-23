const path = require('path');
const {
  CleanWebpackPlugin,
} = require('../12_webpack加载vue文件/node_modules/clean-webpack-plugin');
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
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        // 本质上是依赖于typescript (typescript compiler)
        // use: 'ts-loader'
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'coderZsq webpack',
      template: './index.html',
    }),
  ],
};
