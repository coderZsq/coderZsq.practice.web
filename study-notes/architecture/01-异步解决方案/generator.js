// 生成器就是一个函数, 其中包含了很多小的函数
// 只是形式上多了一个*
/**
function sum() {
  console.log(100)
  return 20
  console.log(200)
  return 30
  return 50
}
sum()
*/

// 定义一个生成器
// yield: 产生溢出, 可以理解为return, 但是在一个生成器中可以有多个yield
function* gen() {
  yield 100
  console.log(101)
  yield 200
  console.log(201)
  yield 300
  console.log(301)
  yield 400
  console.log(401)
  return 500
}

let it = gen() // 当生成器执行后, 获取到的是一个迭代器, 我们需要通过迭代器的next方法来依次执行对应的yield
/**
 * 我们执行完成对应的yield后, 获取到的值是一个对象, 对象中有两个属性一个value表示我们yield后的值
 * 一个done表示生成器是否执行完成, 如果执行完成done会设置为true, 如果没有执行完成会设置为false
 * 如何判断是否执行完成, 一般如果没有yield就表示执行完成, 执行完最后一个yield以后, 如果继续执行next方法
 * 就好告诉我们生成器已经完成, done设置为true
 */
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())