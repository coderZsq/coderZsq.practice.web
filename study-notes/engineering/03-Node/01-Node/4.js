/**
 * Created by Administrator on 2017/6/28.
 */
var http = require('http');
 var server = http.createServer(function (req, res) {

     res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
     res.end('i buy'+(1+2 +3)+'s');

 })
server.listen(3000,'127.0.0.1');

