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
        // for(var i = 0;i< files.length;i++){
        //     var filePath = files[i];
        //     //检测对应的路径是否是一个文件夹,注意检测路径的时候要和album拼接然后检测
        //     fs.stat('./album/'+filePath,function (err,stats) {
        //
        //         //判断
        //         //因为是在异步操作中获取i值,不能获取到
        //         //因为在for循环中一旦有延迟操作(异步就是一个延迟操作),对应i值是获取不到,所以我们可以使用闭包
        //
        //         if(stats.isDirectory()){
        //             filePaths.push(filePath);
        //
        //
        //         }
        //
        //         console.log(filePaths);
        //
        //
        //     })
        // }


        (function iterator(i) {

            //0.判断是否应该终止
            if(i == files.length){
                console.log(filePaths);
                return;
            }


            //1.获取对应的路径
            var filePath = files[i];
            //2.检测路径
            fs.stat('./album/'+filePath,function (err,stats) {

               if(stats.isDirectory()){
                   filePaths.push(filePath);
               }
               //当每次检测完毕后,让对应的i值加一
                iterator(i+1);


            })




        })(0);


    })

    res.end();

})
server.listen(3000,'127.0.0.1');
