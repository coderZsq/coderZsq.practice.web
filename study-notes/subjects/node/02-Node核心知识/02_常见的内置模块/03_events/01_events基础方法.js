const EventEmitter = require('events')

// 1. 创建发射器
const emitter = new EventEmitter()

// 2. 监听某一个事件
// addListener是on的alias简写
emitter.on('click', (args) => {
  console.log('监听1到click事件', args)
})

const listener2 = (args) => {
  console.log('监听2到click事件', args)
}
emitter.on('click', listener2)

// 3. 发出一个事件
setTimeout(() => {
  emitter.emit('click', 'coderZsq', 'james', 'kobe')
  emitter.off('click', listener2)
  emitter.emit('click', 'coderZsq', 'james', 'kobe')
}, 2000);