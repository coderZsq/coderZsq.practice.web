/**
 * Created by Administrator on 2017/7/6.
 */

//导入对应包
var mysql = require('mysql');
//创建冰箱 打开冰箱 放入大象,关闭门
//1.创建连接
var conection = mysql.createConnection({
    host:'localhost',
    Port:'3306',
    user:'root',
    password:'root',
    database:'mydata1'

})

//2.打开数据库
conection.connect();
//3.操控数据库,第一个参数表示sql语句,第二个表示回调
conection.query('SELECT * FROM employTest',function (err,result,fields) {


    //rows(result):是一个数组集合,即使没有数据也是一个数组
    console.log(result);

})
//4.关闭连接
conection.end();
