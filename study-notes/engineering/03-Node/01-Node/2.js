/**
 * Created by Administrator on 2017/6/28.
 */
var http = require('http');
var server = http.createServer(function (req, res) {
    //设置响应头
    //一般用来设置响应回来的内容的类型
    //第一个参数表示状态码
    //第二个参数表示内容的类型
    res.writeHead(200,{'Content-Type':'text/plain;charset=UTF8'});


    //当响应完毕后,需要调用这个方法用来表示响应已经完成
    //里面可以传递一个参数,这个参数一般是一个字符串或者data
    res.end('<h1>i am h1</h1>');


})
server.listen(3000,'127.0.0.1');