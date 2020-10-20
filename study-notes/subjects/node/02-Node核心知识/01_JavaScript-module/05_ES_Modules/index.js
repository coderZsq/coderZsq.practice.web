// 常见的导入方式也是有三种
// 方式一: import {} from '路径';
// import { name, age, sayHello } from './modules/foo.js';

// 方式二: 导出变量之后可以起别名
// import { name as wName, age as wAge, sayHello as wSayHello } from './modules/foo.js';
// import { fName as wName, fAge as wAge, fSayHello as wSayHello } from './modules/foo.js';

// 方式三: * as foo
// import * as foo from './modules/foo.js';

// console.log(foo.name);
// console.log(foo.age);
// foo.sayHello('王小波');

// 演练: export和import结合使用
import { name, age, sayHello } from './modules/bar.js';

console.log(name);
console.log(age);
console.log(sayHello);

// 演练: default export如何导入
import format from './modules/foo.js';
format();

// 演练: import()函数
let flag = true;
if (flag) {
  // require的本质是一个函数
  // require('');

  // 执行函数
  // 如果是webpack的环境下: 模块化打包工具: es CommonJS require()
  // 纯ES Module环境下面: import()
  // 脚手架 -> webpack: import()
  import('./modules/foo.js').then(res => {
    console.log('在then中的打印');
    console.log(res.name);
    console.log(res.age);
  }).catch(err => {

  });
}