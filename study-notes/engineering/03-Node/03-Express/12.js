/**
 * Created by Administrator on 2017/7/2.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');


//使用app设置ejs
app.set('view engine','ejs');

app.get('/',function (req,res) {
    res.render('form.ejs');

})

//在post请求之前设置url编码格式

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/',function (req,res) {

    //通过body可以获取提交的参数
    //一定注意如果是上传的post请求不能使用body-parser,是一个轻量级别,不能处理上传时候的参数
    //需要使用formidable

    console.log(req.body);
    res.end('finish');

})

app.listen(3000);

//处理post请求