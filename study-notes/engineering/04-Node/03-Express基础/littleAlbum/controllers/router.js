/**
 * Created by Administrator on 2017/7/2.
 */

//处理路由

var file = require('../models/file.js');
var formidable = require('formidable');


exports.showIndex = function (req,res,next) {

    //渲染页面

    // res.render('index.ejs',{
    //     //根据错误,我们可以确定数据没有获取到
    //     albums:file.getAllalbum()
    // })
    //因为这个函数中有读取文件的操作,所以这个函数是异步的,那么就是说数据有延迟
    //就会出现,当进行渲染的时候,数据还没有返回,就会出现刚才的错误
    //解决办法:我们只需要在数据返回之后再渲染
    //就是直接调用file中的函数,但是在这个函数中写一个回调,当数据有了一会在回调
    //我们只需要在回调中进行渲染就可以,这样可以保证一定会有数据
    file.getAllalbum(function (err,fileNames) {

        if(err){
            //如果有错误,我们需要让程序继续寻找其他路由
            next();

            return;
        }

        //渲染
        res.render('index.ejs',{
            albums:fileNames
        })


    })



}

exports.showImages = function (req,res,next) {

    //调用对应的方法,然后在这个方法的回调中渲染界面
    //获取点击的时候的相册的名称,通过获取参数来获取
    var albumName = req.params.albumName;
    file.getAllImagesByName(albumName,function (err,images) {
        if(err){
            next();
            return;
        }

        //渲染
        res.render('album.ejs',{

            albumname:albumName,
            images:images


        })

    })



}

//处理上传的函数
//渲染这个界面需要使用albums,但是这个数据我们已经获取过了,直接使用
exports.showUp = function (req,res,next) {
    file.getAllalbum(function (err,albums) {
        if(err){
            next();
            return
        }
        //渲染
        res.render('up.ejs',{
            albums:albums
        })

    })


}

//处理post上传函数设置
exports.doPost = function (req,res,next) {

    //没有对应的界面,只要设置上传数据
    //创建上传的表单
    var form = new formidable.IncomingForm();


    //设置一个上传的路径
    form.uploadDir = './tempLoad'

    //设置解析数据
    form.parse(req,function (err,fields,files) {
        //如果想要修改的名称

        if(err){
            throw err;
            next();
            return;

        }

        res.send('success');


    })



}

//处理错误路由
exports.showError = function (req,res) {

    //错误路由没有数据,直接渲染
    res.render('err.ejs');


}
