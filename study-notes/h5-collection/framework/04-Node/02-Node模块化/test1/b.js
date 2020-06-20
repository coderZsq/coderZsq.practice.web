/**
 * Created by Administrator on 2017/6/29.
 */
// console.log('1234');

var fs = require('fs');

//当我们导入一个包的时候,使用require,根据当前的路径直接设置就可以
//但是是注意,如果要是我们在一个js文件中导入别的js文件,如果被导入的文件(b.js)
//有读取文件的操作,那么注意读取的文件的路径最好使用绝对路径
//因为读取文件时候对应参照是以当前的命令行中的盘符作为参考值,所以我们一般不要直接使用,盘符会经常的变动,所以我们一般不使用
//我们如果使用决定路径可以借助__dirname
//__dirname:表示当前文件所在的目录,例如:一个文件是b.js,这个文件定位全路径:c\abc\dced\b.js,__dirname代表c\abc\dced

fs.readFile(__dirname+'/1.txt',function (err,data) {
    console.log('123443543');
    console.log(data);

})