const resolveApp = require('./paths');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isProduction = false;

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    hotOnly: true,
    compress: true,
    contentBase: resolveApp('./sq'),
    watchContentBase: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        pathRewrite: {
          '^/api': '',
        },
        secure: false,
        changeOrigin: true,
      },
    },
    historyApiFallback: {
      rewrites: [{ from: /abc/, to: 'index.html' }],
    },
  },
  plugins: [
    // 开发环境
    new ReactRefreshWebpackPlugin(),
  ],
};
