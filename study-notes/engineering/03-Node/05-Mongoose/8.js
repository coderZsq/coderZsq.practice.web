/**
 * Created by Administrator on 2017/7/5.
 */
var http  =require('http');
 var socketIo = require('socket.io');
 var fs = require('fs');
 var server = http.createServer(function (req,res) {

     //渲染界面
     fs.readFile('./index.html',function (err,data) {
         res.end(data);

     })


 });
 server.listen(3000,'127.0.0.1');
 //创建socket,socket创建必须设置在server之后
// var socket = socketIo.createServer(server);
var socket = socketIo(server);
//使用socket接收信息,使用on表示接收
//第一个表示接收信息表示,第二个表示接收到的信息的具体的内容(使用回调表示)
//emit:表示发送请求
socket.on('connection',function (socket) {
    console.log('接收到了连接');
    //处理对应发送过来的信息
    socket.on('tiwen',function (msg) {
        console.log(msg);

    })

    socket.emit('reply','我睡了');



})

