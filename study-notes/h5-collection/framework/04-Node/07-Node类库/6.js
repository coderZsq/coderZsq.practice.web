/**
 * Created by Administrator on 2017/7/9.
 */

var exprss = require('express');
var bodyParser = require('body-parser');
var gm = require('gm');
var fs = require('fs');


var app = exprss();
//设置静态路由
app.use(exprss.static('./public'));

//设置url编码格式
app.use(bodyParser.urlencoded({ extended: false }));
// 设置表示通过json获取body中的具体某个参数
app.use(bodyParser.json());
//处理提交的路由
app.post('/upload',function (req,res) {
    //裁剪图片需要获取对应的宽度和高度以及位置
    var x1= req.body.x1;
    var y1 = req.body.y1;
    var w = req.body.w;
    var h = req.body.h;
    //使用gm裁剪
    // gm().crop().write()

    //gm中放置原始图片的路径
    //crop中放置四个参数,第一个参数表示w,第二个h,第三个表示x,第四个表示y
    //write:表示输出的路径
    gm('./sago.jpg').crop(w,h,x1,y1)
        .write('./sago2.jpg',function (err) {
            if(err){
                console.log(err);
            }
            console.log('finish');


        })

    res.send('1');


})

app.listen(3000);