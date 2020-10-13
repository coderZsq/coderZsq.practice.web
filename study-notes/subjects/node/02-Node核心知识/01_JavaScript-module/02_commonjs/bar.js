// 就是一个模块
// 1. 模块内部定义东西
const age = 18;
let message = 'my name is zsq';
function sayHello(name) {
  console.log('Hello ' + name);
}

// 2. 测试其他地方的修改
// setTimeout(() => {
//   exports.name = 'james';
// }, 1000);

// setTimeout(() => {
//   console.log(exports.name);
// }, 2000);

// 通过exports导出内容
// exports.name = name;
// exports.age = age;
// exports.sayHello = sayHello;

// 测试自己内部进行修改对其他地方的影响
// setTimeout(() => {
//   module.exports.name = '哈哈哈';
//   console.log(exports.name);
// }, 1000);

// 本质上是module.exports在导出
// 导出一个对象类型的引用传递案例分析(内存画图)
// let name = 'coderZsq';
let info = {
  name: 'coderZsq'
};

setTimeout(() => {
  info.name = '11111111';
}, 1000);

module.exports = {
  info: info,
  age: 123,
  sayHello: function (name) {
    console.log('你好' + name);
  }
};

// exports和module.exports之间有什么关系呢
// 导出一个新的对象, 对导出的内容的影响: 不带exports玩了
// module.exports = {

// };