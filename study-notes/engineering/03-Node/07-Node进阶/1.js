/**
 * Created by Administrator on 2017/7/9.
 */
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
//必须设置,使用cookie
app.use(cookieParser());
//设置路径访问某一个路径的时候,就设置cookie
app.get('/',function (req,res) {

    //cookie是服务器颁发客户端
    //所以注意服务器来设置cookie,所以使用res
    //使用res设置cookie,通过cookie方法,这个方法中
    //有三个参数,第一个表示设置的值的key值,第二个表示设置的值的value值
    //第三个表示cookie固定的默认设置,一般我们设置过期时间以及是否只是支持http
    //时间设置的时候900000是毫秒
    res.cookie('name','xiaobai',{expires:new Date(Date.now()+900000),httpOnly:true});

    //当下次访问的时候,获取cookie,获取cookie的时候通过req,因为cookie存储到客户端记录的客户端的信息
    console.log('cookies:'+req.cookies.name);

    res.send('1');




});
app.listen(3000);
