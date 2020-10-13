/**
 * Node中实现CommonJS的本质就是对象的引用赋值
 * exports {name, age, sayHello}
 */

// bar = {name, age, sayHello}
const bar = require('./bar');

console.log(bar.name);
console.log(bar.age);
bar.sayHello('kobe');

setTimeout(() => {
  console.log(bar.info.name);
}, 2000);

// setTimeout(() => {
//   bar.name = '哈哈哈';
// });

// console.log(name);
// console.log(age);
// sayHello('kobe');