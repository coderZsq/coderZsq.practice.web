const MyPromise = require('./promise2.js')

let promise = new MyPromise(function (resolve, reject) {
  // setTimeout(function () {
  //   resolve(20)
  // })
  resolve(100)
})

promise.then(function (data) {
  console.log(data)
  // return 123
  return new Promise(function (resolve, reject) {
    reject(20)
  })
}).then(function (data) {
  console.log(data)
})