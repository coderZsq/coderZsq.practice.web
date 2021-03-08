const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    react: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, './dll'),
    filename: 'dll_[name].js',
    library: 'dll_[name]',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new webpack.DllPlugin({
      name: 'dll_[name]',
      path: path.resolve(__dirname, './dll/[name].manifest.json'),
    }),
  ],
};
