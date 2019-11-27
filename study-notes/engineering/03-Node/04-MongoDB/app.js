
/**
 * Created by Administrator on 2017/7/30.
 */

var express = require('express');
var db = require('./models/db.js');

//分别设置四个路由来测试对应的函数

//设置插入的路由,然后使用函数插入对应的数据
var app = express();
app.get('/insert',function (req,res) {
    //调用函数插入数据
    db.insert('teacher',{'name':'test','age':'20'},function (err,result) {

        if(err){
            console.log('插入失败');
            return;
        }
        res.send(result);
    })

})
//设置查找
app.get('/find',function (req,res) {
    db.find('teacher',{},function (err,result) {
        if(err){
            console.log('查找失败');
            return;
        }
        console.log(result);
        res.send('1');


    })

})
//设置修改的路径
app.get('/update',function (req,res) {
    db.update('teacher',{'age':'20'},{$set:{'age':'100'}},function (err,result) {

        if(err){
            console.log('修改失败');
            return;
        }
        res.send(result);


    })

})
app.listen(3000);