/**
 * Created by Administrator on 2017/7/30.
 */

var mongoClient = require('mongodb').MongoClient;

var dbUrl = 'mongodb://localhost:27017/myTest';
mongoClient.connect(dbUrl,function (err,db) {

    if(err){
        console.log('连接失败');
        return;
    }
    //查找数据
     var cursor = db.collection('teacher').find();
    //cursor:表示一个游标,不是一个集合
    //如果想要获取对应的记录,我们需要遍历对应的游标
    var result = [];
    cursor.each(function (i,dom) {

        //i表示索引
        //dom表示每一条记录
        //获取每一条记录我们需要设置一个数组来记录
        //判断终止条件,只要dom不为空就表示数据,如果有数据,就添加
        if(dom !=null){
            result.push(dom);
        }else{
            console.log(result);
            db.close();
        }




    })



})