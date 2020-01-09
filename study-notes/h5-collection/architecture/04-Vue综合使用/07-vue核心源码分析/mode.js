// 设置订阅中心, 以及订阅者
// 设置订阅中心
function Dep() {
  // 设置对应的数组来记录有多少个订阅者
  this.subs = []
}
// 发布中心有两个方法, 第一个方法就是添加订阅者
Dep.prototype.addsub = function (sub) {
  this.subs.push(sub)
}
// 第二个方法就是设置对应的通知订阅者
Dep.prototype.notify = function () {
  // 就是通知所有的订阅者, 然后订阅者接受到信息后, 作出对应的操作
  this.subs.forEach(sub => sub.update())
}

// 设置对应的订阅者
function Watcher(fn) {
  // fn表示接受到通知后要做的事情
  this.fn = fn
}
// 一般订阅者有一个方法, 就是更新方法, 这个方法内部我们只需要调用对应fn即可
Watcher.prototype.update = function () {
  this.fn();
}

let dep = new Dep()
let watcher = new Watcher(function () {
  console.log('----')
})
dep.addsub(watcher)

dep.notify()