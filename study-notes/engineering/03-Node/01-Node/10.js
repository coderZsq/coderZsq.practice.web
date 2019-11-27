/**
 * Created by Administrator on 2017/6/28.
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req,res) {

    //不处理图片请求
    if(req.url== '/favicon.ico'){
        return;
    }

    //读取文件
    var userId= parseInt(Math.random()*8999+10000);
    console.log('welcom'+userId);


    fs.readFile('./test/2.txt',function (err,data) {

        if(err){
            //抛出错误
            throw  err;

        }
        console.log(userId+'receive data finish');

        //没有错误

        res.end(data);




    })

});
server.listen(3000,'127.0.0.1');
