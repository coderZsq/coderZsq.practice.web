/**
 * Created by Administrator on 2017/7/5.
 */
/*有一个课程模型,有两个属性第一个名称,第一个选取这个课程的学生(数组)
* 还有一个学生模型:有名称 ,年龄 ,性别属性
* */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test66');
var db = mongoose.connection;
db.once('open',function () {
    console.log('open');
})
//如果发现某一个对象中使用另外的对象,我们先创建被包含的对象
var stuSchema = mongoose.Schema(
    {
        name:String,
        age:Number,
        sex:String

    }
)

//设置一个方法让学生长大两岁
stuSchema.methods.addYear = function () {
    this.age++;
    this.save();

}
//创建课程
var curseSchema = mongoose.Schema({
    name:String,
    students:[stuSchema]
})
//添加一个方法用来添加学生
curseSchema.methods.addStudent = function (stuObj) {
    //拿到当前课程的students然后添加对应的学生
    this.students.push(stuObj);
    //保存当前的课程
    this.save();



}

//生成学生类和课程类
var Student = mongoose.model('Student',stuSchema);
//给课程设置对应的方法
//num:表示标识学生的号码
curseSchema.methods.findStudent = function (num,callBack) {
    //找到某个学生.this表示课程,
    // this.model('Student')
    Student.findOne({name:this.students[num].name},function (err,result) {
        callBack(err,result);

    })


}

var Curse = mongoose.model('Curse',curseSchema);

//利用类生成对应的对象
var stu1 = new Student({name:'xiaoming',age:15,sex:'man'});
var chinese = new Curse({name:'chinese'});
//保存
stu1.save();
chinese.save();

//让chinese添加一个学生,添加一个实例方法,chninese来调用
chinese.addStudent(stu1);
//当我找到一个叫做小明的学生后,让小明的年龄增长2岁
Student.findOne({name:'xiaoming'},function (err, result) {

    //调用方法让对应的年龄增长2岁,写成一个方法
    if(!result){//result == null,false
        //表示没有结构,直接结束程序
        return;

    }


    //调用方法
    result.addYear();


})
//找到课程chinse,然后取出其中一个选取这门课程的学生
Curse.findOne({name:'chinese'},function (err,result) {

    if(!result){
        return;
    }
    console.log('123432');

    //找到一个选取了这门课程的学生,给课程添加一个方法用来找到对应的某个学生

    result.findStudent(0,function (err, result) {

        if(err){
            console.log('没有找到');

        }
        console.log(result);
    })



})



