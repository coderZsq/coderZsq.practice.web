/**
 * Created by Administrator on 2017/7/2.
 */
/*处理整体的业务逻辑*/
var express = require('express');
var app = express();
var router = require('./controllers');

//设置渲染模板
app.set('view engine','ejs');

//处理路由

app.use(express.static('./public'));
//注意在实际开发中,静态路由可以设置多个
//因为图片无数资源,凡是资源文件显示到结界面上的时候,都需要设置路由
//所以我们想要uploads中的图片显示,只需要给uploads设置静态路由
app.use(express.static('./uploads'));

//处理首页
app.get('/',router.showIndex);
//处理显示相册的图片的路由
app.get('/:albumName',router.showImages);
//处理get上传路由
app.get('/up',router.showUp);
//处理post上传路由
app.post('/up',router.doPost);
//处理错误路径,除了以上的路径都是错误路径
//我们的路径设置应该是/,使用use重中间件处理路径,无论是post还是get都要处理
// app.use('/',router.showError);
app.use('/',function (req, res) {
    res.render('err.ejs');
})

//设置监听
app.listen(3000);
