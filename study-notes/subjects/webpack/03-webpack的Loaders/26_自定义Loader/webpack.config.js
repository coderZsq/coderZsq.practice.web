const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    // Rule对象
    rules: [
      // {
      //   test: /\.js$/i,
      //   use: {
      //     loader: 'sq-loader01',
      //     options: {
      //       name: 'sq',
      //       age: '18',
      //     },
      //   },
      // },
      // {
      //   test: /\.js$/i,
      //   use: 'sq-loader02',
      //   enforce: 'pre',
      // },
      // {
      //   test: /\.js$/i,
      //   use: 'sq-loader03',
      // },
      {
        test: /\.js$/i,
        use: {
          loader: 'sqbabel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.md$/i,
        use: [
          // 'html-loader',
          'sqmd-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolveLoader: {
    modules: ['node_modules', './sq-loaders'],
  },
  plugins: [new HtmlWebpackPlugin()],
};
