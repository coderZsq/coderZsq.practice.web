/**
 * Created by Administrator on 2017/6/28.
 */
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    //不处理图片请求
    if(req.url== '/favicon.ico'){
        return;
    };

    //创建文件夹
    fs.mkdir('./album/bbb',function (err) {
        if(err){
            throw err;
        }

        console.log('1234');

        res.end('finsh');


    })

});
server.listen(3000,'127.0.0.1');
