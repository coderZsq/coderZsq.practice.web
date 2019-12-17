/**
 * Created by Administrator on 2017/7/30.
 */

var mongoClient = require('mongodb').MongoClient;
// var assert = require('assert');

/*创建连接的数据库的地址
第一部分表示协议
第二个部分表示主机地址
第三部分表示端口号
第四部分表示连接的数据库的名称
* */
var dbUrl = 'mongodb://localhost:27017/myTest';

/*连接*/
mongoClient.connect(dbUrl,function (err,db) {

    //db:用来表示设置对集合的操作
    if(err){
        console.log('连接数据库失败');
        return;
    }
    console.log('success');
    //当数据库使用完毕后,一定要关闭
    db.close();


})