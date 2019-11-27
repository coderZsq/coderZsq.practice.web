/**
 * Created by Administrator on 2017/7/5.
 */
var Student = require('../models/Student.js');

exports.showIndex = function (req,res) {
    //调用查找数据的方法,然后数据回来后渲染

    Student.findS({},function (err,results) {

        res.render('index.ejs',{
            result:results
        })
    })



}