const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    // 必须是一个绝对路径
    path: path.resolve(__dirname, './build')
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
        use: [
          {
            // loader: 'file-loader',
            loader: 'url-loader',
            options: {
              name: 'img/[name].[hash:6].[ext]',
              // outputPath: 'img',
              limit: 100 * 1024
            }
          }
        ]
      }
    ]
  }
}