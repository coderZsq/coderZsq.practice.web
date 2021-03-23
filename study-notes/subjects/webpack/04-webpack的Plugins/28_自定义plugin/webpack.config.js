const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AutoUploadPlugin = require('./plugins/AutoUploadPlugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new AutoUploadPlugin({
      host: '47.101.146.105',
      username: 'root',
      password: '',
      remotePath: '/root/test',
    }),
  ],
};
