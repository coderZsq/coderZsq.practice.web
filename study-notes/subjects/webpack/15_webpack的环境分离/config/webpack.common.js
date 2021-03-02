const resolveApp = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const { merge } = require('webpack-merge');

const prodConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev');

const commonConfig = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolveApp('./build'),
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.vue'],
    alias: {
      '@': resolveApp('./src'),
      pages: resolveApp('./src/pages'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/i,
        use: 'vue-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new VueLoaderPlugin(),
  ],
};

module.exports = function (env) {
  const isProduction = env.production;
  process.env.NODE_ENV = isProduction ? 'production' : 'development';

  const config = isProduction ? prodConfig : devConfig;
  const mergeConfig = merge(commonConfig, config);
  return mergeConfig;

  // return {
  //   // 绝对路径 vue cli2 -> context
  //   // context: path.resolve(__dirname, '../'),
  //   // entry写上相对路径时, 并不是相对于文件所在的路径, 而是相对于context配置的路径
  //   entry: './src/main.js',
  //   output: {
  //     path: path.resolve(__dirname, '../build'),
  //   },
  // };
};
