const { SyncWaterfallHook } = require('tapable')

let queue = new SyncWaterfallHook(['name'])
// 使用任务流来监听对应的小的任务, 然后回调
queue.tap('1', function (name) {
  console.log(1, name)
  return 20
})
queue.tap('2', function (data) {
  console.log(2, data)
  return 30
})
queue.tap('3', function (data) {
  console.log(3, data)
})

queue.call('Castie!')