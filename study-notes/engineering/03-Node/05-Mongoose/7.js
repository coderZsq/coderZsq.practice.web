/**
 * Created by Administrator on 2017/7/5.
 */
var Student = require('./models/Student.js');

//利用类创建实例,而且保存实例
Student.create({
    name:'xiaobai',
    age:20,
    sex:'man'
});

Student.create({
    name:'xiaobai1',
    age:25,
    sex:'man'
});

Student.create({
    name:'xiaobai1',
    age:30,
    sex:'man'
});

//查询数据
Student.findS({},function (err,results) {
    if(err){
        console.log('查找错误');
        return;
    }
    console.log(results);

})

