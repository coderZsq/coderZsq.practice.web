/**
 * Created by Administrator on 2017/6/28.
 */
var http = require('http');
//导入fs
var fs = require('fs');

var server = http.createServer(function (req,res) {

    /*根据不同的路由返回不同的页面*/
    //对于res.end一般只能返回字符串以及二进制数据,所以我们不能直接返回页面
    //想要返回页面我们需要读取对应的html文件,然后把读取到的数据返回过来
    //想要读取文件,我们需要借助一个fs的包

    if(req.url == '/fang'){
        //读取文件
        //第一个参数表示文件的路径,可以使用相对路径,也可以使用决定路径
        //我们一般使用相对路径,我们注意同级目录使用./表示

        //第二个参数表示读取文件后的回调
        //读取数据的回调的第一个参数都是err,表示错误
        //第二个参数是data,是二进制数据
        fs.readFile('./test/xixi.html',function (err,data) {

            //设置响应头
            res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});

            //返回数据
            res.end(data);

        })

    }

    else if(req.url == '/yuan'){
        //读取文件
        fs.readFile('./test/haha.html',function (err,data) {
            //设置响应头
            res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
            res.end(data);

        })
    }
    else if(req.url =='/1.jpg'){
        fs.readFile('./test/0.jpg',function (err,data) {
            //注意设置响应头的内容格式的时候,我们需要设置对应的图片的格式
            res.writeHead(200,{'Content-Type':'img/jpg;charset=UTF8'});

            res.end(data);


        })

    }
    //当设置对应的url的时候是采用的link中href属性的值,
        //读取文件的时候,是读取的正确的路径就是aaaaaa.css
    else if(req.url == '/bbb.css'){

        fs.readFile('./test/aaaaaa.css',function (err,data) {
            //当时css的时候,设置的内容的格式是text/css

            res.writeHead(200,{'Content-Type':'text/css;charset=UTF8'});
            res.end(data);


        })

    }
    //子nodejs中凡是资源的文件都需要设置路由,所以图片我们需要给图片设置路由
    //html属于资源文件
    //图片属于资源文件
    //css文件属于资源文件



})
server.listen(3000,'127.0.0.1');

//对于node.js没有web容器(放置静态资源的文件),它的路由的设置和资源文件不是一一对应的,两者之间没有必然的联系.
