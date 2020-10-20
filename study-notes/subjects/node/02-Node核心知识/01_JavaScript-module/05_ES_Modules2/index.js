// 演练: export和import结合使用
import { name, age, sayHello } from './modules/foo.js';

// console.log(name);
// console.log(age);
// console.log(sayHello);

// setTimeout(() => {
//   // name: sq aaaaaa
//   console.log(name);
// }, 2000);

setTimeout(() => {
  name.name = 'bbbbb';
}, 1000);