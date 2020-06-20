/**
 * Created by liujun on 2018/3/2.
 */
/**1.js语法：继承*/
/*1.定义Person类*/
function Person(name,age) {
    this.name=name;
    this.age=age;
}

/*2.添加方法*/
Person.prototype.getName=function () {
    return this.name;   
}


/*3.定义Student类*/
function Student(name,age,job) {
    /*4.借用构造器函数*/
    Person.call(this,name,age);
    this.job=job;
}

/*5.让Student类继承Person类:(原型链继承)*/
Student.prototype=new Person();
Student.prototype.constructor=Student;

/*6.给Student的类添加方法*/
Student.prototype.getJob=function () {
    return this.job;
}


/*7.新建Student的对象*/
var student=new Student('lili',20,'study');
console.log(student);
