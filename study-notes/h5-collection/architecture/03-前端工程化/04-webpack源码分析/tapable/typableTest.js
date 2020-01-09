const { Tapable, SyncHook } = require('tapable')
Tapable.hooks = {
  queue1: new SyncHook()
}
Tapable.hooks.queue1.tap('1234', function () {
  console.log('finish')
})
Tapable.hooks.queue1.call()