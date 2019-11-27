/**
 * Created by Administrator on 2017/6/29.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var path =  require('path');


var server = http.createServer(function (req, res) {

    //如果获取的对应的路径是/,表示我们需要加载index.html
    //在node.js中,我们可以把static作为一个根目录,就是在浏览器访问的时候
    //可以省略不写例如 访问的路径是 /static/index.html , 可以写成/index.html
    var pathName = url.parse(req.url).pathname;
    if(pathName == '/'){
        //加载index.html

        // fs.readFile('./static/index.html',function (err,data) {
        //
        //
        //
        // })
        pathName ='/index.html';

    }

    //获取后缀名称
    var extname = path.extname(pathName);

    //读取对应的路径
    fs.readFile('./static'+pathName,function (err,data) {

        //判断如果要是有错误(没有对应的路径),我们就加载404页面
        if(err){
            //再次读取页面
            fs.readFile('./static/404.html',function (err,data) {

                //因为所有的资源都需要设置响应头,所以我们不能直接设置头text/html,需要判断
                console.log('fdasfds');

                //


                res.writeHead(200,{'Content-Type':'text/html'});

                res.end(data);



            })


        }
        else{
            //没有就读取对应的路径下资源

            //需要判断,如果pathname的后缀名是.html,设置 text/html
            //如果是.css,设置text/css
            //如果是.jpg,设置image/jpg
            //因为这是一个功能,所以我们最好把它抽取成一个函数



            //设置响应头,可以不写编码格式
            // res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
            var mime = getExtname(extname);
            res.writeHead(200,{'Content-Type':mime});

            //返回数据
            res.end(data);


        }



    })


})
server.listen(3000,'127.0.0.1');

//抽取函数用来获取后缀名,我们需要设置一个参数表示后缀名

function getExtname(extname) {
    switch (extname){
        case '.html':
            return 'text/html';
            break;
        case '.css':
            return 'text/css';
            break;

        case '.jpg':
            return 'image/jpg';
            break;


    }


}

