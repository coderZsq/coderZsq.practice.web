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
          'css-loader',
        ]
        // loader: 'css-loader'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      }
    ]
  }
}