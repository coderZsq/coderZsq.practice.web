/**
 * Created by Administrator on 2017/7/5.
 */
var http = require('http');
var fs = require('fs');



var server = http.createServer(function (req,res) {
    if(req.url == '/'){
        //读取文件
        fs.readFile('./huaban.html',function (err,data) {

            res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});

            res.end(data);

        })
    }



});
var socket =require('socket.io')(server);

//当接受到对应的请求我们回复信息
socket.on('connection',function (socket) {
    console.log('我接受到了一个连接');

    //做处理
    //当接受到客户端的一些信息后我就做出处理
    socket.on('hua',function (msg) {
        //mes:表示提问时候的信息
        //接受提问后给对应的客户端回复
        // console.log(mes);
        // socket.emit('huida',mes);
        socket.emit('huida',msg);



    })


})

server.listen(3000,'127.0.0.1');
