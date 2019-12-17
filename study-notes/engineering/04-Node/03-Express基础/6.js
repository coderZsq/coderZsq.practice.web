/**
 * Created by Administrator on 2017/7/2.
 */
//当使用/路径的时候,显示form表单,当点击提交的时候处理post请求
var express = require('express');
var app = express();

//设置渲染的模板引擎
app.set('view engine','ejs');


//处理路由
app.get('/',function (req,res) {


    //渲染form
    //当渲染模板的时候,如果没有数据,我们不传入数据就可以了
    res.render('form.ejs');
})


//处理post路由
app.post('/',function (req,res) {

    res.send('post-success');

})

app.listen(3000);
