const { SyncHook } = require('tapable')

let queue = new SyncHook(['name'])
// 使用任务流来监听对应的小的任务, 然后回调
queue.tap('1', function (name) {
  console.log(1, name)
})
queue.tap('2', function (name) {
  console.log(2, name)
})
queue.tap('3', function (name) {
  console.log(3, name)
})

queue.call('Castie!')