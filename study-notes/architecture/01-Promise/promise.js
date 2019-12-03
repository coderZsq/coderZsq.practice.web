setTimeout(function () {
  console.log(2)
}, 300)

setTimeout(function () {
  console.log(4)
}, 500)

function printNum() {
  console.log(1)
}

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3)
  }, 1000)
})

promise.then(function (data) {
  console.log(data)
})

printNum()