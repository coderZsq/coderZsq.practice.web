/**
 * Created by Administrator on 2017/7/2.
 */
//当发送get或者post请求的时候,如果获取页面中的请求参数,我们post需要借助body-parser
    //如果是get我们使用express就可以,不需要借助别的包
    //使用req.query可以获取路由中设置的参数,亦可以获取页面中表单的参数


var express = require('express');
var app = express();
app.get('/',function (req,res) {
    console.log(req.query);
    res.end('finish');

})
app.listen(3000);


