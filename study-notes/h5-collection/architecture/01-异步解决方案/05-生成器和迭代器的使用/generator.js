const fs = require('fs')
const co = require('co')
function myRead(entry) {
  return new Promise(function (resolve, reject) {
    fs.readFile(entry, 'utf8', function (err, data) {
      err ? reject(err) : resolve(data)
    })
  })
}

// 最终的实现方式
/**
 * async await的本质就是把原来的生成器中的*使用async进行替换, 原来的yield使用await替换
 * 然后通过co这个第三方包执行结果
 * 
 * 对于await的后面的值永远是一个promise, 而且注意async的返回值也是一个promise
 */
async function gen() {
  let a = await myRead('./1.txt')
  console.log(a)
  let b = await myRead('./2.txt')
  console.log(b)
  let c = await myRead('./3.txt')
  console.log(c)
  return 50
}

gen().then(function (data) {
  console.log(data)
})

co(function* gen() {
  let a = yield myRead('./1.txt')
  console.log(a)
  let b = yield myRead('./2.txt')
  console.log(b)
  let c = yield myRead('./3.txt')
  console.log(c)
  return c
})