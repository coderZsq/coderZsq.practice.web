/**
 * Created by Administrator on 2017/6/29.
 */
//require引入文件的时候需要以当前这个文件为基准,设置引入文件的路径
    //当我们通过require引入一个文件的时候,这个文件中放置的是一些代码,那么会把这些代码放到引入的文件中,当我们执行这个foo文件的时候,会执行对应的代码
    //代码执行的过程:当我们引入的文件中是代码的时候,会把引入的代码放在一个函数中,然后形成字符串,使用eval函数来执行这个字符串
    //例如:  function(){+  consoloe.log('hello word')+'}';


 // var bar = require('./bar.js');
    //当我们在一个文件中定义了一个变量或者函数,这个变量以及函数只能在这个文件内部使用,如果想要在外面使用,我们需要把这个函数以及变量暴露出去
    //使用exports暴露变量或者函数

var msg = 'hello';
var info = 'info';
function showInfo() {
    console.log('1234543');

}
exports.msg = msg;
exports.info = info;
exports.showInfo = showInfo;
