/**
 * Created by Administrator on 2017/7/2.
 */
var express = require('express');
var app = express();
//在epxress中寻找路由的过程
//寻找路由,如果水流,是从上到下来寻找
//如果要是匹配到对应的路由后,默认情况下,就会停止,不会继续寻找新的路由


//设置一个路由
app.get('/',function (req,res,next) {
    console.log(1);
    next();

    res.send('1');



})

app.get('/',function (req,res) {
    console.log('2');
    res.send(2);

})
app.listen(3000);

