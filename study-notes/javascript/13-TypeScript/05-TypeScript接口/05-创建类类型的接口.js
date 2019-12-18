/**2.创建一个Person类*/
var Person = (function () {
    function Person() {
    }
    /*函数*/
    Person.prototype.eat = function (food) {
        console.log(food);
    };
    return Person;
}());
new Person().eat('米饭1');
var Student = (function () {
    function Student() {
    }
    /*函数*/
    Student.prototype.eat = function (food) {
        console.log(food);
    };
    return Student;
}());
new Student().eat('米饭2');
