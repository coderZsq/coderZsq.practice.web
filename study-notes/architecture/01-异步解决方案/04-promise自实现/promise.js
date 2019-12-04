/**
 * 1. 设置一个类用来表示promise, 这个类中有一个参数task, task是一个方法, 这个方法有两个参数, 一个是resolve, 一个是reject
 * 2. 设置对应的then方法, 这个方法中, 我们需要根据不同的状态返回对应的新的promise
 * 3. 在then方法中, 因为我们每次执行对应的resolve或者reject获取到结果后, 我们需要进行解析
 */

// 0. 设置状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

// 1. 设置对应的类
function Promise(task) {
  // 1.1 设置基础的属性的值
  let that = this
  that.status = PENDING
  that.onResolveCallbacks = []
  that.onRejectCallbacks = []

  // 1.2 设置resolve方法
  function resolve(value) {
    // 1. 判断如果value对象是一个thenable对象, 我们直接执行当前value的then方法
    if (value != null && typeof value.then && typeof value.then == 'function') {
      value.then(resolve, reject)
    }
    setTimeout(function () {
      if (that.status == PENDING) {
        that.status = FULFILLED
        that.value = value
        that.onResolveCallbacks.forEach(item => item(that.value))
      }
    })
  }

  // 1.3 设置reject方法
  function reject(reason) {
    setTimeout(function () {
      if (that.status == PENDING) {
        that.status = REJECTED
        that.value = reason
        that.onRejectCallbacks.forEach(item => item(that.value))
      }
    })
  }

  // 1.4 调用task方法
  try {
    task(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

// 独立抽取一个函数来解析对应的返回的结果
// 对于解析的过程, 我们需要一直递归解析直到对应的返回的x值是一个普通值
function resolvePromise(promise2, x, resolve, reject) {
  // 3.1 判断x和promise2是否是同一个, 如果是同一个, 我们抛出错误, 循环引用
  if (x == promise2) {
    return reject(new TypeError('循环引用'))
  }

  let called = false

  // 3.2 如果x是一个promise类型的对象
  if (x instanceof Promise) {
    // 根据不同状态设置不同的执行
    if (x.status == PENDING) {
      x.then(function (y) {
        resolvePromise(promise2, y, resolve, reject)
      }, reject)
    } else {
      x.then(resolve, reject)
    }
  }

  // 3.3 如果x是一个thenable对象, 就是x有一个then方法
  else if (x != null && ((typeof x == 'object') || (typeof x == 'function'))) {
    try {
      let then = x.then
      if (typeof then == 'function') {
        then.call(x, function (y) {
          if (called) return
          called = true
          resolvePromise(promise2, y, reslove, reject)
        }, function (err) {
          if (called) return
          called = true
          reject(err)
        })
      } else {
        // 表示一个普通的值
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  }

  else {
    resolve(x)
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  // 2.21 设置处理对应的onFulfilled以及onRejected
  onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : function (value) { return value }
  onRejected = typeof onRejected == 'function' ? onRejected : reason => { throw reason }

  // 设置不同的状态返回新的promise
  let that = this
  let promise2;
  if (that.status == FULFILLED) {
    // 因为我们执行的对应的函数的结果可能返回一个新的promise或者是一个对应thenable对象或者是一个普通对象
    // 所以我们需要对这个对象进行解析
    return promise2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          let x = onFulfilled(that.value)
          resolvePromise(promise2, x, resolve, reject)
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
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    })
  }
  if (that.status == PENDING) {
    return promise2 = new Promise(function (resolve, reject) {
      that.onResolveCallbacks.push(function () {
        try {
          let x = onFulfilled(that.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
      that.onRejectCallbacks.push(function () {
        try {
          let x = onRejected(that.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}

module.exports = Promise