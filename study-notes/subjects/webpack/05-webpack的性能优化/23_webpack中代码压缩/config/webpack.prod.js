const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const PurgeCssPlugin = require('purgecss-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const glob = require('glob');

const resolveApp = require('./paths');

const isProduction = true;

module.exports = {
  mode: 'production',
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
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new PurgeCssPlugin({
    //   paths: glob.sync(`${resolveApp('./src')}/**/*`, { nodir: true }),
    //   safelist: function() {
    //     return {
    //       standard: ['body', 'html'],
    //     };
    //   },
    // }),
    new CompressionPlugin({
      test: /\.(css|js)$/i,
      threshold: 0,
      minRatio: 0.8,
      algorithm: 'gzip',
      // exclude
      // include
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime.*\.js/]),
  ],
};
