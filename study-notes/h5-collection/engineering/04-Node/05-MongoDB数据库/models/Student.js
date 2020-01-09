/**
 * Created by Administrator on 2017/7/5.
 */
//连接数据库,最好形成独立的文件
var db = require('./db.js');
//使用schema来设置对应的方法
var mongoose = require('mongoose');
//创建对应schema
var studentSchema = mongoose.Schema({
    name:String,
    age:Number,
    sex:String
});
//设置一个查询的方法,查询一般是类来操作,设置静态方法
//设置两个参数:第一个表示查询的条件
//第二个参会表示回调
studentSchema.statics.findS = function (json,callBack) {
    //使用对应的类来查询对应的数据
    //这里还是最好通过model来获取对应的模型,我们不要直接使用this
    //写法固定

    // this.model('Student').find(json,function (err,result) {
    //     callBack(err,result);
    //
    // })
    this.model('Student').find(json,callBack);
}
//创建对应的类
var Student = mongoose.model('Student',studentSchema);
//暴露这个类
module.exports = Student;


