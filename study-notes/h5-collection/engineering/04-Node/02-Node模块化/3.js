/**
 * Created by Administrator on 2017/6/29.
 */

//引入foo.js,这里foo相当于exports
var foo = require('./test/foo.js');

console.log(foo.msg);
console.log(foo.info);
console.log(foo.showInfo());

