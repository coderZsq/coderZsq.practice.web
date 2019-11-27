/**
 * Created by Administrator on 2017/6/28.
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    //不处理图片请求
    if(req.url== '/favicon.ico'){
        return;
    };

    var filePaths = [];//用来记录我们符合条件的目录
    //获取album下面所有的文件夹
    //可以读取album这个目录,获取里面所有的文件以及文件夹的路径,然后遍历所有的路径
    //判断没一个路径是否是一个目录,如果是一个目录就把它
    /*readdir:这个方法用来读取目录,第一个参数表示对应路径,第二个参数表示回调*/
    fs.readdir('./album',function (err,files) {
        //files:表示album下面所有的东西的路径,是一个数组
        //遍历路径
        for(var i = 0;i< files.length;i++){
            var filePath = files[i];
            //检测对应的路径是否是一个文件夹,注意检测路径的时候要和album拼接然后检测
            fs.stat('./album/'+filePath,function (err,stats) {

                //判断
                if(stats.isDirectory()){
                    filePaths.push(filePath);


                }

                console.log(filePaths);


            })
        }



    })

    res.end();

})
server.listen(3000,'127.0.0.1');
