/**
 * Created by Administrator on 2017/6/29.
 */
function Person(name,age) {


    this.age = age;
    this.name = name;
}

//在原型中设置方法
Person.prototype = {
    sayHello:function () {
        console.log('hello world');
    }
}


// exports.person = Person;
//当想要暴露一个类的时候,直接使用exports不可行,我们需要借助module
module.exports = Person;