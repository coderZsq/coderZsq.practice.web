const EventEmitter = require('events')

// 1. 创建发射器
const emitter = new EventEmitter()

// 2. 监听某一个事件
// addListener是on的alias简写
// 只执行一次
emitter.once('click', (arg1, arg2, arg3) => {
  console.log('监听1到click事件', arg1, arg2, arg3)
})

const listener2 = function (arg1, arg2, arg3) {
  // 特点: 不绑定this, 也不绑定arguments数组
  console.log(arguments)
  console.log(this)
  console.log('监听2到click事件', arg1, arg2, arg3)
}
emitter.on('click', listener2)

// 将本次监听放到最前面
emitter.prependListener('click', (arg1, arg2, arg3) => {
  console.log('监听3到click事件', arg1, arg2, arg3)
})

emitter.on('scroll', (args) => {
  console.log('监听到scroll方法')
})

// 3. 发出一个事件
setTimeout(() => {
  // emitter.removeAllListeners('click')
  emitter.emit('click', 'coderZsq', 'james', 'kobe')
  emitter.emit('click', 'coderZsq', 'james', 'kobe')
  emitter.emit('scroll', 'coderZsq', 'james', 'kobe')
}, 2000);


console.log(arguments)
console.log(this)