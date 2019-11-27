/**
 * Created by Administrator on 2017/6/29.
 */
//当我们导入一个文件的时候,如果要是不写对应的路径,只写对应文件以及对应的后缀名称,默认会去node_modules下面找对应的文件
var foo = require('foo.js');

console.log(foo.msg);
console.log(foo.info);
