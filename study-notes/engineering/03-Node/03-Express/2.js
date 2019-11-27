/**
 * Created by Administrator on 2017/7/2.
 */
var express = require('express');
var app = express();

//处理路由
//在experss中设置路由的时候,我们使用:表示参数参数名称在冒号之后
// app.get('/teacher/:id',function (req,res) {
//
//     //req.params:获取请求的参数
//     console.log(req.params['id']);
//     res.send('finish');
//
//
// });

//& ?
app.get('/:username/:password',function (req,res) {

    console.log(req.params.username);
    console.log(req.params.password);

})
app.listen(3000);
