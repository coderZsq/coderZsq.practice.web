const fs = require('fs')
const co = require('co')
function myRead(entry) {
  return new Promise(function (resolve, reject) {
    fs.readFile(entry, 'utf8', function (err, data) {
      err ? reject(err) : resolve(data)
    })
  })
}

function* gen() {
  let a = yield myRead('./1.txt')
  console.log(a)
  let b = yield myRead('./2.txt')
  console.log(b)
  let c = yield myRead('./3.txt')
  console.log(c)
  return c
}

function co(gen) { // gen表示一个生成器, co返回的结果是一个promise, 我们可以通过promise来处理对应的过程
  let it = gen() // it表示一个迭代器
  return new Promise(function (resolve, reject) {
    !function next(lastValue) {
      let { value, done } = it.next(lastValue)
      /**
       * next方法的核心过程, 就是根据done的状态来设置对应的过程
       * 如果done为true, 我们直接采用最终的结果即可
       * 如果done为false, 我们需要继续递归
       */
      if (done) {
        resolve(value)
      } else {
        value.then(next, reject)
      }
    }()
  })
}

co(gen)

let it = gen()
let r1 = it.next() // {value: promise1, done: false}
r1.value.then(function (data) {
  let r2 = it.next(data)
  r2.value.then(function (data2) {
    let r3 = it.next(data2)
    r3.value.then(function (data3) {
      let r4 = it.next(data3)
    })
  })
})