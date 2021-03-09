const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const isProduction = true;

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  externals: {
    lodash: '_',
    dayjs: 'dayjs',
  },
  optimization: {
    // usedExports: 目的是标注出来哪些函数是没有被使用 unused
    usedExports: true, //production
    minimize: true,
    minimizer: [
      // 由Terser将未使用的函数, 从我们的代码中删除
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          compress: {
            arguments: false,
            dead_code: true,
          },
          mangle: true,
          toplevel: true,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
  plugins: [
    // 生产环境
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css',
    }),
    new CssMinimizerPlugin(),
    // new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
