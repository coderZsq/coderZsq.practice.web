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

// 设置解析对应的 promise
function reslovePromise(promise2, x, resolve, reject) {
  // 2.31 
  if (promise2 == x) {
    return reject(new TypeError('循环引用'))
  }
  // 2.32
  if (promise2 instanceof Promise) { // 表示是一个 promise 对象, 但是和 promise2 不是同一个对象
    if (x.status == PENDING) {
      x.then(function (y) {
        reslovePromise(promise2, y, resolve, reject)
      }, reject)
    } else {
      x.then(resolve, reject)
    }
  } else if (x != null && ((typeof x == 'function') || (typeof x == 'object'))) { // 表示是一个 thenable 对象
    let then = x.then
    if (typeof then === 'function') {
      then.call(x, function (y) {
        reslovePromise(promise2, y, resolve, reject)
      }, function (err) {
        reject(err)
      })
    } else { // 普通对象
      resolve(x)
    }
  } else { // 表示是一个普通的值
    resolve(x)
  }
}

// 设置处理then方法
Promise.prototype.then = function (onFulfilled, onRejected) {
  // 2.21判断传入的是否是一个函数
  onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : function (value) {
    return value
  }

  onRejected = typeof onRejected == 'function' ? onRejected : reason => {
    throw reason
  }

  let promise2;
  let that = this
  // 根据不同的状态来设置不同的处理
  if (that.status == FULFILLED) {
    return promise2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          let x = onFulfilled(that.value)
          reslovePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    })
  }
  if (that.status == REJECTED) {
    return promise2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          let x = onRejected(that.value)
          reslovePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    })
  }
  if (that.status == PENDING) {
    return promise2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        that.onResolveCallbacks.push(function () {
          let x = onFulfilled(that.value)
          reslovePromise(promise2, x, resolve, reject)
        })
        that.onRejectCallbacks.push(function () {
          let x = onRejected(that.value)
          reslovePromise(promise2, x, resolve, reject)
        })
      })
    })
  }
}

module.exports = Promise