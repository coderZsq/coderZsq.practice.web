/**
 * Created by Administrator on 2017/6/28.
 */

var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req,res) {

    //不处理图片请求
    if(req.url== '/favicon.ico'){
        return;
    };

    //检测某个目录是否是一个文件夹,第一个参数表示目录的路径
    //第二个参数回调,回调中第一个参数表示错误,第一个表示读取到的对应状态的数据
    fs.stat('./album/aaa',function (err,stats) {
        //isDirectory():通过这个方法可以判断是否是一个文件夹
        console.log(stats.isDirectory());
        res.end();

    })


});
server.listen(3000,'127.0.0.1');