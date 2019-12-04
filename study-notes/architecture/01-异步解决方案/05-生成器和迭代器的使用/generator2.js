function* foo() {
  for (let i = 0; true; i++) {
    let reset = yield i
    if (reset) {
      i = -1
    }
  }
}

let it = foo()
// yield可以中断函数执行
console.log(it.next())
console.log(it.next())
console.log(it.next(true))
// 如果调用next方法的时候, 我们不传入值, 对应的yield的返回值是一个undefined
// 如果next方法传入值, 会作为上一次yield的返回值
