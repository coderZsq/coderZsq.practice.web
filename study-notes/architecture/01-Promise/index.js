const MyPromise = require('./promise.js')

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(20)
  })
})

promise.then(function (data) {
  console.log(data);
})