/**
 * Created by Administrator on 2017/7/30.
 */

var mongoClient = require('mongodb').MongoClient;

//设置连接的数据库的路径的时候,如果数据库不存在,那么系统会自动创建,当插入数据的时候会自动创建

var dbUrl = 'mongodb://localhost:27017/myTest';
mongoClient.connect(dbUrl,function (err,db) {

    if(err){
        console.log('连接失败');
        return;
    }
    //插入数据
    //collection:表示设置集合,参数表示集合的名称

    //对于集合,如果不存在,系统会自动创建
    db.collection('teacher').insertOne({"name":"小白"},function (err,result) {

        if(err){
            //
            console.log('插入数据失败');
            return;
        }
        console.log('插入成功');

        //关闭数据库
        db.close();



    })

})