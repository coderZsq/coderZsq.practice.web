/**
 * Created by Administrator on 2017/7/2.
 */
// var http= require('http');
// var server = http.createServer(function (req,res) {
//
// })
// server.listen(3000,'127.0.0.1');
var express = require('express');
var app = express();

app.get('/',function (req,res) {

    //send:相当于end,但是有默认的响应头的设置,在一次访问中响应头一般设置一次
    //响应头一般在返回数据之前设置
    res.send('1234');

})
app.listen(3000);


