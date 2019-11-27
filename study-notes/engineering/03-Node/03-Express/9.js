/**
 * Created by Administrator on 2017/7/2.
 */
/*use使用时候的一些特点*/
var express = require('express');
var app = express();

//处理路由
//使用use的时候,如果前面路由设置的时候,已经设置好了对应的基本的url
//那么后面无论拼接多少个对应值(路径),都可以,而且我们可以获取这些值(路径)
// app.use('/admin',function (req,res) {
//     console.log(req.originalUrl+'\n');
//     console.log(req.baseUrl+'\n');
//     console.log(req.path+'\n');
//     res.send('finish');
//
// })

//在使用use的时候,路径设置为/,表示可以匹配所有的路径
// app.use('/',function (req,res) {
//     res.send('1234');
//
// })
//当使用use匹配到所有的路径的时候,我们可以采取简写形式,就是可以把路径去掉
// app.use(function (req,res) {
//     res.send('1234-test');
//
// })
app.use(haha);
//当只是有回调的时候,我们可以把回调抽取成一个函数直接来使用
app.listen(3000);

function haha(req,res) {
    res.send('hahahah');


}