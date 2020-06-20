/**
 * Created by Administrator on 2017/7/5.
 */

var express = require('express');
var app = express();
var Student = require('./models/Student.js');
var router = require('./controllers/router.js')

//设置渲染引擎
app.set('view engine','ejs');

//当接收到对应的路由后作出处理,当处理数据的时候,发现不好处理,先拿到回调数据,然后做路由处理
// app.get('/',function (req,res) {
//
//     //渲染界面
//     res.render('index.ejs',{result:)
//
// })
// Student.findS({},function (err,result) {
//     app.get('/',function (req,res) {
//         res.render('index.ejs',{result:result});
//
//     })
//
// });
app.get('/',router.showIndex);
//监听
app.listen(3000);