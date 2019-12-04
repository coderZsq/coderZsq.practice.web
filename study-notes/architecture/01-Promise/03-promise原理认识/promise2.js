/**
 * https://promisesaplus.com/
 */

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

// 1.设置一个类
function Promise(task) {
  // 2.设置基础的属性
  let that = this
  that.status = PENDING
  that.onResolveCallbacks = []
  that.onRejectCallbacks = []

  // 3.设置resolve方法
  function resolve(value) {
    if (that.status == PENDING) {
      that.status = FULFILLED
      that.value = value
      that.onResolveCallbacks.forEach(item => item(that.value))
    }
  }

  // 4.设置reject方法
  function reject() {
    if (that.status == PENDING) {
      that.status = REJECTED
      that.value = value
      that.onRejectCallbacks.forEach(item => item(that.value))
    }
  }

  // 执行task
  task(resolve, reject)
}

// 设置处理then方法
Promise.prototype.then = function (onFulfilled, onRejected) {
  let that = this
  // 根据不同的状态来设置不同的处理
  if (that.status == FULFILLED) {
    onFulfilled(that.value)
  }
  if (that.status == REJECTED) {
    onRejected(that.value)
  }
  if (that.status == PENDING) {
    that.onResolveCallbacks.push(onFulfilled)
    that.onRejectCallbacks.push(onRejected)
  }
}

module.exports = Promise