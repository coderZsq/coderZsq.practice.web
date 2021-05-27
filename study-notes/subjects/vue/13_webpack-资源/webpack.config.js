const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    // assetModuleFilename: 'img/[name]_[hash:6][ext]',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       // outputPath: 'img',
      //       name: 'img/[name]_[hash:6].[ext]',
      //       limit: 100 * 1024,
      //     },
      //   },
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
      // {
      //   test: /\.(eot|ttf|woff2?)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       // outputPath: 'font',
      //       name: 'font/[name]_[hash:6].[ext]',
      //     },
      //   },
      // },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]',
        },
      },
    ],
  },
};
