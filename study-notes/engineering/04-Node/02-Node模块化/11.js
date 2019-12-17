/**
 * Created by Administrator on 2017/6/29.
 */
var http = require('http');
var formidable = require('formidable');

var　server = http.createServer(function (req, res) {
    //判断是否post请求以及对应action
    if(req.url== '/dopost' && req.method.toLowerCase() == 'post'){

        //1.创建对应的form
        var form = new formidable.IncomingForm();

        //1.1在上传完成之前设置对应的上传路径
        form.uploadDir = "./upLoad";
        
        //2.解析对应的请求,表示所有的东西上传过来后进行解析
        form.parse(req,function (err, fields, files) {

            //req:表示请求
            //feilds:表示所有的域,包含单选框以及复选框以及别的在form可以用提交参数的所有的元素
            //files:表示所有上传过来的文件

            //获取上传过来图片的路径
            console.log(files.tupian.path);

            //返回完成
            res.end();


            
        })
        
    }


})

//
server.listen(3000,'127.0.0.1');
