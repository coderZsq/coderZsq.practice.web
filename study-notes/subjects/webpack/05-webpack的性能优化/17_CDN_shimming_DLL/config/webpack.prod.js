const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = true;

module.exports = {
  mode: 'production',
  externals: {
    // windows._
    lodash: '_',
    // window.dayjs
    dayjs: 'dayjs',
  },
  plugins: [
    // 生产环境
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
    }),
  ],
};
