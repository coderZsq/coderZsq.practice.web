/**
 * Created by Administrator on 2017/7/2.
 */
var express = require('express');
var app = express();
//处理路由
//下面的路由设置非常接近,所以会出现请求的时候,请求返回数据错误
//当设置路由接近的时候,会出现某一个路由永远访问不到,因为上面已经把他拦截
//解决:第一个办法:调换位置(路由解析从上到下),这种方式不好(当路由比较多的时候,我们无法确保位置)
//利用next:是一个方法,可以让当路由匹配成功后继续往下解析
//一般放在我们路由请求的回调中,作为一个参数


app.get('/:username/:password',function (req,res,next) {

    console.log('用户名称');



    //在实际开发中,当匹配到这个路由后,我们会去数据库中检索数据,如果有对应的数据,我们直接send,而且不写next,如果没有检索到数据,我们就next(),继续寻找路由
    // if(检索到数据){
    //     res.send('user');
    // }else{
    //     next();
    // }





})

app.get('/admin/1234',function (req,res) {
    console.log('admin');
    res.send('admin');

})



app.listen(3000);
