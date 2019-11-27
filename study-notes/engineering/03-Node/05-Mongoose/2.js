/**
 * Created by Administrator on 2017/7/5.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test33');
//一般在设置对应的类之前,我们最好检测数据库是否打开
//我们需要借助db对象,需要获取这个对象
  var db = mongoose.connection;
  //检测数据库是否打开
db.once('open',function (err) {
    if(err){
        console.log('打开失败');
        return;
    }
    console.log('打开成功');

})

//通过schema创建类
//通过这种(mongoose.model('Blog',{}))设置schema,这种方式只能设置属性,
//不能设置方法,所以我们可以单独建立一个对象用来表示schema
//也可以使用new来设置这个schema对象
var blogSchema = mongoose.Schema({

    //标题 ,发布时间 ,作者,内容,评论(数组)

    title:String,
    time:Date,
    author:String,
    body:String,
    comments:[{body:String,currTime:Date}]


});
//可以使用shema扩展方法,需要使用schema对象,类有静态方法和实例方法,我们先扩展实例方法
//methods:通过这个属性来扩展实例方法,实例方法对象调用,我们扩展一个名称是showInfo方法
//this:表示谁调用就表示谁,实例调用
blogSchema.methods.showInfo = function () {
    console.log(this.title);

}
var Blog = mongoose.model('Blog',blogSchema);

//创建一个对象
var myBlog = new Blog({title:'不要睡觉打豆豆',time:new Date(),author:'大家',body:'我们没有睡觉没有打豆豆',comments:[{body:'大家和听话,好好学习',currTime:new Date()}]});

//保存对象
myBlog.save();

//实例调用方法
myBlog.showInfo();
