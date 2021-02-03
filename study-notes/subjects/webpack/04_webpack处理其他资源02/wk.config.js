const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    // 必须是一个绝对路径
    path: path.resolve(__dirname, './build'),
    // assetModuleFilename: 'img/[name].[hash:6][ext]'
  },
  module: {
    rules: [
      {
        // 规则使用正则表达式
        test: /\.css$/, // 匹配资源
        use: [
          // { loader: 'css-loader' },
          // 注意: 编写顺序 (从下往上, 从右往左, 从后往前)
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         // require('autoprefixer'),
          //         // require('postcss-preset-env')
          //         'postcss-preset-env'
          //       ]
          //     }
          //   }
          // }
        ]
        // loader: 'css-loader'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'less-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        // type: 'asset/resource', // file-loader的效果
        // type: 'asset/inline', // url-loader
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      {
        test: /\.ttf|eot|woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:6][ext]'
        }
      }
    ]
  }
}