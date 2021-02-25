const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // watch: true,
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // 打包后的文件的输出目录
    path: path.resolve(__dirname, './build'),
    // 在打包之后的静态资源前面进行一个路径的拼接
    // js/bundle --> ./js/bundle.js
    // publicPath: '/abc',
  },
  // 专门为webpack-dev-server
  // devServer为开发过程中, 开启一个本地服务
  devServer: {
    hot: true,
    hotOnly: true,
    // host: '0.0.0.0',
    // port: 7777,
    // open: true,
    compress: true,
    contentBase: path.resolve(__dirname, './sq'),
    watchContentBase: true,
    // publicPath: '/abc',
    proxy: {
      // '/api': 'http://localhost:8888',
      '/api': {
        target: 'http://localhost:8888',
        pathRewrite: {
          '^/api': '',
        },
        secure: false,
        changeOrigin: true,
      },
    },
    // historyApiFallback: true,
    historyApiFallback: {
      rewrites: [{ from: /abc/, to: 'index.html' }],
    },
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      pages: path.resolve(__dirname, './src/pages'),
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
    new ReactRefreshWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
};
