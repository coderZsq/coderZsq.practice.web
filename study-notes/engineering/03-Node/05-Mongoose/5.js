/**
 * Created by Administrator on 2017/7/5.
 */
//需要设置一个微博类,这个类中包含了四个属性,1.title 2.author 3.body4.comments:评论是一个数组
//每一条评论中宝包含评论的内容和评论的时间
//需求2:当我们找到一条符合条件的评论后,我需要添加一条评论
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test44');
var db = mongoose.connection;
//检测
db.once('open',function () {
    console.log('open');
})

var commentSchema = mongoose.Schema({
    body:String,currTime:Date
})
//创建一个微博的schema
var blogSchema = mongoose.Schema({
    title:String,
    author:String,
    body:String,
    comments:[commentSchema]
})
//添加一个实例方法
blogSchema.methods.addComment = function (comObj) {
    //添加评论:就是给当前的博客的评论添加一条记录,然后保存
    //评论是动态的变化,变化的东西作为参数
    this.comments.push(comObj);
    //重新保存当前的微博
    this.save();
}


//创建类
var Blog = mongoose.model('Blog',blogSchema);


//创建实例对象
var myBlog = new Blog({
    title:'大家都饿了',
    author:'大家',
    body:'大家饿了,吃黄焖鸡米饭',
    comments:[{body:'黄焖鸡米饭我也不知道好不好吃',currTime:new Date()}]

})
myBlog.save();

//找到一条符合条件的评论,然后添加评论
Blog.findOne({title:'大家都饿了'},function (err,result) {
    //添加评论设置成一个方法,应该实例方法


    result.addComment({body:'我吃过了,不好吃',currTime: new Date()});


})
