const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = true;

module.exports = {
  mode: 'production',
  externals: {
    lodash: '_',
    dayjs: 'dayjs',
  },
  plugins: [
    // 生产环境
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css',
    }),
  ],
};
