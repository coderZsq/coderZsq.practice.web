/**
 * Created by Administrator on 2017/7/2.
 */
//如果使用express下的ejs来渲染模板,我们需要创建一个views的文件夹来放置对应的
//模板文件(一般是一个html文件,也就是ejs文件)

var express = require('express');
var app = express();
//设置需要渲染的文件使用哪个后台模板(ejs)来渲染
//当使用我们对应的ejs的时候,我们可以不需要导入包,当使用这个包的时候
//系统会自动到node_moduls下面找对应的包,就是说node_modules下面必须有这个包
app.set('view engine','ejs');
//处理路由
app.get('/',function (req,res) {

    //原生的时候,我们需要使用fs读取文件,然后使用对应的方法转化成字符串模板
    //当使用express的时候,我们直接渲染就可以了
    //res.end:当响应完成后返回的数据,一般只能返回字符串以及data数据(buffer)
    //res.send:和end一样,但是默认设置了响应头
    //res.render:就是用来渲染某个文件的,渲染完成后会把对应的页面显示到浏览器中
    res.render('index.ejs',{a:6});

})
app.listen(3000);
