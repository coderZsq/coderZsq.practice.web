/**
 * Created by Administrator on 2017/6/29.
 */

//当我们输入的url是/,就加载首页,如果我们输入的url的前九位是/student/,我们就显示学生页,如果是其他情况就显示一个404错误页
//页面中只需要返回this is indexpage ,this is student page, 404
var http = require('http');


var server = http.createServer(function (req, res) {
    if(req.url== '/'){
        //设置响应头
        res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
        //返回数据
        res.end('this is index page');
    }
    else if(req.url.substr(0,9)=='/student/'){

        //设置响应头
        res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
        //返回数据
        res.end('this is student page');

    }
    else{
        //设置响应头
        res.writeHead(404,{'Content-Type':'text/html;charset=UTF8'});
        //返回数据
        res.end('404');

    }
})


server.listen(3000,'127.0.0.1');
