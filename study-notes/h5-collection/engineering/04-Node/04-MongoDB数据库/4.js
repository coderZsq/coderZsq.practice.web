/**
 * Created by Administrator on 2017/7/30.
 */
var express = require('express');
var mongoClient = require('mongodb').MongoClient;

var dbUrl = 'mongodb://localhost:27017/myTest';
var app = express();
/*设置ejs渲染*/
app.set('view engine','ejs');

/*当时基本的路由的时候,显示index.ejs*/
app.get('/',function (req,res) {

    //我们渲染页面使用数据库中的数据,所以我们需要获取数据库中的数据然后再渲染

    //连接数据库服务器,然后获取数据后渲染


    mongoClient.connect(dbUrl,function (err,db) {


        if(err){
            console.log('连接失败');
            return;
        }
        //查找数据库获取数据
       var cursor =   db.collection('teacher').find();

        //遍历游标
        //设置一个数组用来记录每一条记录
        var results = [];
        cursor.each(function (i,dom) {
            //只有有值就记录
            if(dom!=null){
                results.push(dom);
            }else{
                //表示数据已经记录完成,我们渲染界面
                res.render('index.ejs',{result:results});

                //关闭数据库
                db.close();

            }


        })

    })




});

//设置添加路由
app.get('/add',function (req,res) {

    //没有数据直接渲染
    res.render('add.ejs');


})

//当设置对应的路由是submitData路由的时候,我们获取页面中的数据(从页面中提交参数)
//拿到参数或当成数据插入到数据库中,然后在都首页刷新显示新的数据
app.get('/submitData',function (req,res) {
    //获取姓名和年龄然后添加到数据库中
    //对于表单提交的数据,我们一般通过req.query获取
    var name = req.query.name;
    var age = req.query.age;
    //连接数据库插入数据
    mongoClient.connect(dbUrl,function (err,db) {
        if(err){
            console.log('连接失败');
            return;
        }

        //插入数据
        db.collection('teacher').insertOne({'name':name,'age':age},function (err,result) {
            if(err){
                console.log('插入失败');
                return;
            }

            console.log('插入成功');
            db.close();
            res.send('finish');



        })

    })



})

app.listen(3000);


