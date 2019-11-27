/**
 * Created by Administrator on 2017/6/28.
 */
//http包的使用
var http  = require('http');
//创建发服务器
var server = http.createServer(function (req, res) {

    //注意在返回的res中,设置对应的方法的时候,对于end方法一般只调用一次
    //当响应完成后,一般不再响应后面设置任何东西以及写任何代码




    res.write('<h1>i am h1</h1>') ;

    res.write('<h2>i am h3</h2>');
    res.write('<h3>i am h3</h3>');
    res.end('finish');




})

server.listen(3000,'127.0.0.1');
