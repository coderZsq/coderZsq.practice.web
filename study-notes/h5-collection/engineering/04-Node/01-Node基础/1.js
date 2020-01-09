/**
 * Created by Administrator on 2017/6/28.
 */
/*1导入http包,通过require*/
 var http = require('http');

 /*2.创建服务器
 * 创建的服务器需要有一个回调,这个回调中有两个参数
 * 第一个参数表示请求request,第二个参数表示response
 * */

 //只有客户端有请求就会调用这个方法
 var server =  http.createServer(function (req,res) {
     console.log('1234');
     res.end('hello,world');

 })
/*3.监听服务器,需要包含服务器的地址以及对应端口*/
server.listen(3000,'127.0.0.1');

