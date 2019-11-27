/**
 * Created by Administrator on 2017/6/29.
 */

//当我们导入一个文件的时候,如果要是不写对应的路径,而且不写后缀名,只写对应文件
    //会先去node_modules下面去找对应的和这个名称一样的js文件,如果没有这个文件会把这个对应的名称当成一个文件夹,去读取下面的index.js文件,如果有,就加载这个文件
    //当时一个文件夹的时候,读取文件的本质:会去対应的包中找到一个package.json
    //文件,然后再这个文件中找到一个main字段,然后获取这个字段的value值,这个值就是我们要读取的文件名称.

var foo = require('foo');

console.log(foo.msg);
console.log(foo.info);