/**
 * Created by Administrator on 2017/7/2.
 */
/*使用express处理静态资源*/
var express = require('express');
var app = express();

//使用use处理静态路由
//使用express设置静态路由所在的文件夹路径
//use:可以处理post请求和get请求
app.use(express.static('./public'));




app.listen(3000);
