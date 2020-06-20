/**
 * Created by Administrator on 2017/7/5.
 */
//用来连接数据库
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test77');
var db = mongoose.connection;
db.once('open',function () {
    console.log('open');
})
// 暴露对象
module.exports = db;
