/**
 * Created by Administrator on 2017/6/29.
 */
var http = require('http');
var ejs = require('ejs');
var fs = require('fs')
var　server = http.createServer(function (req,res) {

    //1.读取文件
    fs.readFile('./index.ejs',function (err,data) {

        //1.1我们需要模板,所以要把data转化成字符
        var myS = data.toString();
        //1.2设置数据
        var dataDict = {a:7};
        //1.3使用数据渲染模板
        var html =  ejs.render(myS,dataDict);


        res.end(html);


    })

})

server.listen(3000,'127.0.0.1');