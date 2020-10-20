define(function (require, exports, module) {
  const foo = require('./modules/foo');

  console.log(foo.name);
  console.log(foo.age);
  foo.sayHello('王小波');
}); 