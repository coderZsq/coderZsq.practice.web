module.exports = {
  entry: {
    main: './main.js' // webpack打包入口
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 解析js文件
        use: {
          loader: 'babel-loader', // 使用babel编译
          options: {
            presets: ['@babel/preset-env'], // bebal的初始化编译环境
            plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'createElement' }]] // babel转换react-jsx的插件
          }
        }
      }
    ]
  },
  mode: 'development', // 开发模式 
  optimization: {
    minimize: false // 关闭webpack自动压缩
  }
}