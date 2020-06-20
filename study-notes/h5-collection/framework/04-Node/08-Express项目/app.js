/**
 * Created by Administrator on 2017/7/10.
 */
var express = require('express');
var app = express();
//设置socket,在express中使用socket写法固定
 var http= require('http').Server(app);
 var io =  require('socket.io')(http);
 //设置模板引擎
app.set('view engine','ejs');

//设置session
var session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

//设置路由
app.use(express.static('./public'));

//设置基本的路由
app.get('/',function (req,res) {
    //显示初始页面就是首页
    res.render('index.ejs');

})
//处理check路由

var userNames = []
app.get('/check',function (req,res) {
    //检测用户名称
    //首先判断有没有传入用户名
    //获取用户名称
    var userName = req.query.userName;
    if(!userName){//表示没有值

        res.send('请输入用户名');
        return;

    }
    //用户名称是否重复,使用一个数组每次当到check路由的时候就记录对应的名称
    //然后拿新的名称和这个数组中的所有的名称对比,即可得到是否用户重复
    //indexOf:如果是数组使用这个方法,表示,参数是否存在对应的数组中,如果返回-1表示不存在

    if(userNames.indexOf(userName)!=-1){
        res.send('用户名称重复,请重新输入');
        return;
    }
    //每次请求都应该吧对应的用户名放在数组中存储
    userNames.push(userName);
    //使用session来记录用户名称,只需要记录当前登录的用户即可
    req.session.userName = userName;
    //当记录完成后,我们可以把界面重定向到聊天界面
    //redirect:这个方法由两个参数,第一个表示对应的状态码,只有301,和302,如果写成其他的不会定位,第二个参数表示定位路由,一般第一个参数可以省略
    //就是当检测完成后,跳转到/chat路由对应的页面

    res.redirect('/chat');





});
//处理chat路由
app.get('/chat',function (req,res) {

    //首先判断必须让用户名称存在,使用session
    if(!req.session.userName ){
        //没有值就重新定位到登录界面
        res.redirect('/');
        return;

    }
    //如果有值,就渲染界面
    res.render('chat.ejs',{
        userName:req.session.userName
    });


})
//先接受连接然后接受信息

io.on('connection',function (socket) {
    //
    console.log('我接受到了连接');
    //接受信息
    //on中的第一个参数表示信息的标识符,第二个回调,放置我们传递过来的信息的内容

    socket.on('chat',function (msg) {

        console.log(msg);
        //当接受到信息后,把这些信息原样广播给彼得用户(发送给别的用户)
        socket.emit('chat',msg);



    })

})


//使用http监听
http.listen(3000);