const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['react', 'react-dom'],
  output: {
    path: path.resolve('dist'),
    filename: '[name]_dll.js',
    library: '_dll_[name]' // 设置一个全局变量, 然后通过他来获取对应的文件
  },
  plugins: [
    new webpack.DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, 'dist', 'manifest.json')
    })
  ]
}