/**
 * Created by Administrator on 2017/6/28.
 */
var http = require('http');
var server = http.createServer(function (req,res) {
    //当访问不同的url的时候,我们返回不同的页面
    //需要判断不同的url
    //我们需要使用req.url获取请求的地址,只需要拿到判断
    if(req.url=='/fang'){
        res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});

        res.end('fang');
    }
    else if(req.url=='/yuan'){
        res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
        res.end('yuan');
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html;charset=UTF8'});
        res.end('404');
    }

})

server.listen(3000,'127.0.0.1');

