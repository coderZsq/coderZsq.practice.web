var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by liujun on 2018/3/2.
 */
/*1.定义一个Person的类*/
var Person = (function () {
    /*3.构造函数*/
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    /*4.添加方法*/
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
/*2.定义一个Student的类*/
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, age, job) {
        /*必须放在构造器中的第一行（借用构造器函数）*/
        _super.call(this, name, age);
        this.job = job;
    }
    Student.prototype.getJob = function () {
        return this.job;
    };
    return Student;
}(Person));
/*3.新建Student的对象*/
var student = new Student('lose', 3, 'play');
console.log(student);
