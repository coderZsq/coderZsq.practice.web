let Promise = require('./promise.js')
let promise = new Promise(function (resolve, reject) {
  resolve(200)
})

promise.then(function (data) {
  console.log(data)
  return 300
}).then(data => {
  console.log(data)
})