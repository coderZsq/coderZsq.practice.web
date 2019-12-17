/**
 * Created by Administrator on 2017/7/5.
 */
var mongoose = require('mongoose');
//连接数据库
//关系数据库的要素:数据库 表 字段(每一条记录)
//非关系型数据库 :数据库 集合 文档(每一条记录)
//mongoose的要素 :数据库 类  具体的每一个实例(对象)
mongoose.connect('mongodb://localhost:27017/test33');

//创建一个类
//创建类在这里使用一个schema(概述,模型)
//概述(模型)就是一个具备创建类的所有的属性以及方法的模型
//所以我们可以通过他来创建类,然后通过类创建对象
//schema中一般可以存储属性,这些属性放在一个字典中,
//字典中key表示属性,value表示这个属性的数据类型

//第一个参数表示类的名称,第二个参数表示schema
var Cat = mongoose.model('Cat',{name:String});

//使用类创建对象
var tom = new Cat({ name: 'tom' });
//保存对象,使用对象是通过对象本身来操控
tom.save(function (err) {
    if(err){
        console.log('保存失败');
    }else{
        console.log('保存成功');
    }

})

//查找猫,当我们查找的时候,我们操控的是集合,在这里就是类
//所以我们使用类来查找猫,第一个参数表示查找的条件,第二个参数表示回调
//通过find查找出来的结果是一个数组集合
Cat.find({name:'tom'},function (err,result) {

    console.log(result);

})


