/**
 * Created by Administrator on 2017/7/6.
 */
//进过分析,我们原本需要设置四个方法,但是我们分析后得出所有的方法变化只是sql语句
//所以我们可以只写一个方法,把sql语句作为这个方法的参数
var mysql = require('mysql');

exports.query = function (sql,callBack) {

    //1.创建连接
    var connetion = mysql.createConnection({
        host:'localhost',
        Port:'3306',
        user:'root',
        password:'root',
        database:'mydata1'
    });
    //2.打开数据库
    connetion.connect();
    //3.使用连接执行对应的语句
    connetion.query(sql,function (err,result) {

        //使用回调传递数据
        callBack(err,result);


    })

    //4.关闭连接
    connetion.end();

}