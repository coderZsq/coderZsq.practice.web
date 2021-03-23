const resolveApp = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const { merge } = require('webpack-merge');

// 测量打包时间的插件
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const prodConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev');

const commonConfig = (isProduction) => {
  return {
    entry: {
      main: './src/main.js',
      // index: './src/index.js',
    },
    output: {
      filename: 'js/[name].[chunkhash:6].bundle.js',
      path: resolveApp('./build'),
      chunkFilename: 'js/[name].[contenthash:6].chunk.js',
      publicPath: '',
    },
    resolve: {
      extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.vue'],
      alias: {
        '@': resolveApp('./src'),
        pages: resolveApp('./src/pages'),
      },
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        // 最小尺寸: 如果拆分出来一个, 那么拆分出来的这个包的大小最小为minSize
        minSize: 200,
        // 将大于maxSize的包, 拆分成不小于minSize的包
        maxSize: 200,
        // minChunks表示引入的包, 至少被导入了几次
        minChunks: 1,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            filename: 'js/[id]_venders.js',
            // name: 'vendor-chunks.js',
            priority: -10,
          },
          // bar: {
          //   test: /bar_/,
          //   filename: '[id]_bar.js',
          // },
          default: {
            minChunks: 2,
            filename: 'common_[id].js',
            priority: -20,
          },
        },
      },
      // true/multiple
      // single
      // object: name
      runtimeChunk: {
        name: 'runtime',
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
          // style-loader -> development
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
          sideEffects: true, // react 脚手架中
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        // inject: 'body',
        cache: true, // 当文件没有发生任何改变时, 直接使用之前的缓存
        minify: isProduction
          ? {
              removeComments: false, // 是否要移除注释
              removeRedundantAttributes: false, // 是否移除多余的属性
              removeEmptyAttributes: true, // 是否移除一些空属性
              collapseWhitespace: false,
              removeStyleLinkTypeAttributes: true,
              minifyCSS: true,
              minifyJS: {
                mangle: {
                  toplevel: true,
                },
              },
            }
          : false,
      }),
      new VueLoaderPlugin(),
      // 当在代码中遇到某一个变量找不到时, 我们会通过ProvidePlugin, 自动导入对应的库
      // new webpack.ProvidePlugin({
      //   axios: 'axios',
      //   get: ['axios', 'get'],
      // }),
    ],
  };
};

module.exports = function(env) {
  const isProduction = env.production;
  process.env.NODE_ENV = isProduction ? 'production' : 'development';

  const config = isProduction ? prodConfig : devConfig;
  const mergeConfig = merge(commonConfig(isProduction), config);

  // return smp.wrap(mergeConfig);
  return mergeConfig;
};
