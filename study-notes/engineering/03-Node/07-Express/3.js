/**
 * Created by Administrator on 2017/7/9.
 */
//当我们第访问对应的index页面,如果当前是登录状态,就在这个页面显示登录状态
//如果为登录就显示为登录
//当我们进入到登录界面后,我们记录我们的状态,可以使用sesson来记录对应的状态,以及登录的名称

var express = require('express');
var cookieParser = require('cookie-parser');
var sessionP = require('express-session');

var app = express();
//设置使用cookie和session
app.use(cookieParser());
app.use(sessionP(

{
    resave: true, // true 代表着每次cookie的过期事件都重置
         saveUninitialized : false, //true代表每次请求都会是自己设置一个session
    secret: 'asdasd', //相当于密文
    cookie:{
    maxAge: 900000 // 900秒后自己过期
}
}

))
//处理路由
app.get('/',function (req,res) {
    //当在这个路径的时候,我们可以拿到对应的状态来判断
    if(req.session.login){
        res.send('现在是登录状态');
    }else{
        res.send('现在是没有登录状态');
    }


})
//处理登录路由,如果做登录的一些属性以及状态的记录使用session

app.get('/login',function (req,res) {

    //我们需要在登录后来记录对应的状态
    //通过分析我们使用seesion来记录

    //拿到用户名称和密码,然后登录,登录完成后记录登录状态为登录,可以记录登录的用户名

    //我们可以假设当访问到/login页面以后,就表示已经登录成功
    //记录登录状态
    //通过req获取session
    req.session.login = true;
    req.session.userName = 'xiaobai';
    res.send('finish');


});
app.listen(3000);