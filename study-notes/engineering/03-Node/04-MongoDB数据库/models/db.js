/**
 * Created by Administrator on 2017/7/30.
 */

/*实现数据库的操作,就是增删改查操作*/

var mongoClient = require('mongodb').MongoClient;

var dbUrl = 'mongodb://localhost:27017/myTest';
//通过分析,我们可以把对应的操作封装成函数
/*每一个方法首先都是连接数据库,然后获取db来操控数据
* 但是如果这样做性能不好,所以我们可以把连接数据库的操作封装成一个函数
* 然后把db暴露,我们可以采用回调把db传递出来*/
//设置一个函数用来连接数据库暴露db
function connectDB(callBack) {
    mongoClient.connect(dbUrl,function (err,db) {

        if(err){
            console.log('连接失败');
            return;
        }

        //当成功后,把db传递出来
        callBack(err,db);

    })

}
//添加函数

//注意:集合名称是动态的,所以我们设置为参数
//插入的数据是动态的,所以我们设置为参数,这个参数是一个json
//我们需要把对应的结果传递出去,所以需要使用一个回调传递数据
exports.insert = function (collectionName,json,callBack) {

    //连接数据库
    connectDB(function (err,db) {

        //拿到db插入数据
        db.collection(collectionName).insertOne(json,function (err,result) {
            //传递result到外界,我们需要使用闭包
            // if(err){
            //     console.log('插入失败')
            //     return;
            // }
            //传递数据
            callBack(err,result);
            //关闭数据库
            db.close();


        })


    })


}
/*
* 第一个参数:集合名称
* 第二个参数:表示查找的条件
* 第三个参数表示回调传递数据*/

exports.find  = function (collectionName,json,callBack) {

    //连接数据库
    connectDB(function (err,db) {
        var cursor =  db.collection(collectionName).find(json);

        //遍历游标
        var results = [];
        cursor.each(function (i,dom) {

            if(dom!=null){
                results.push(dom);
            }else{
                //
                callBack(err,results);
                db.close();
            }

        })

    })

}
/*第一个参数:表示集合名称
* 第二个参数:表示修改的条件
* 第三个参数:修改成的内容
* 第四个参数表示回调*/
exports.update = function (collectionName,json1,json2,callBack) {

    //连接数据库
    connectDB(function (err,db) {
        db.collection(collectionName).updateMany(json1,json2,function (err,result) {

            callBack(err,result);


        })

    })


}
/*第一个参数:集合的名称
* 第二个参数:删除的条件
* 第三个参数:回调*/
exports.remove = function (collectionName,json,callBack) {
    connectDB(function (err,db) {
        db.collection(collectionName).removeMany(json,function (err,result) {
            callBack(err,result);


        })

    })

}
