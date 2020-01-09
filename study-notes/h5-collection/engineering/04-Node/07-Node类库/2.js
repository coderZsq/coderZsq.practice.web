/**
 * Created by Administrator on 2017/7/9.
 */

//需求:当我们访问一个search路径的时候,在里面输入参数,然后参数是表示我感兴趣的东西
//每次都需要记录这个参数,当我们访问/路径的时候,把记录的感兴趣的东西输出出来
    //这些所有的东西都是属于客户端,所以我们可以通过cookie来记录

var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
//使用cookie
app.use(cookieParser());

//设置路径

app.get('/',function (req,res) {

    //返回对应的hobbys
    res.send(req.cookies.hobbys);

})

app.get('/search',function (req,res) {
    //记录所有的感兴趣的东西,使用数组,然后再用cookie记录数据
    var hobbys = [];

    //因为cookie第一次访问的时候不存在,所以我们需要判断cookie是否存在
    //如果存在,就直接使用cookie中的值,如果不存在,就直接设置cookie记录对应的值
    if(req.cookies.hobbys){

        //直接使用对应的值
        hobbys = req.cookies.hobbys;

    }
    //记录访问时候的兴趣,然后添加到数组中,最后使用cookie记录数组
    //获取感兴趣的值
    //因为只有访问,就需要添加,所以我们直接不写else

    var hobbyName = req.query.hobName;
    hobbys.push(hobbyName);
    //设置cookie记录hobbys
    res.cookie('hobbys',hobbys,{expires:new Date(Date.now()+900000),httpOnly:true});

    res.send('finish');




})

//监听
app.listen(3000);
