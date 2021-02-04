module.exports = {
  presets: [
    ['@babel/preset-env', {
      // false: 不使用任何的polyfill相关的代码
      // usage: 代码中需要哪些polyfill, 就引用相关的api
      // entry: 手动在入口文件中导入 core-js/regenerator-runtime, 根据目标浏览器引入所有对应的polyfill
      useBuiltIns: 'entry',
      corejs: 3
    }],
    ['@babel/preset-react']
  ],
  // plugins: [
  //   ['@babel/plugin-transform-runtime', {
  //     corejs: 3
  //   }]
  // ]
}