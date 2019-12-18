/**
 * Created by liujun on 2018/3/2.
 */
var Person = (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        /*添加了一个公有的get方法*/
        get: function () {
            return this._name;
        },
        /*添加了一个公有的set方法*/
        set: function (newName) {
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        /*添加了一个公有的get方法*/
        get: function () {
            return this._age;
        },
        /*添加了一个公有的set方法*/
        set: function (newAge) {
            /**在这里可以进行容错的判断*/
            if (newAge < 0 || newAge > 200) {
                throw '输入的年龄有错';
            }
            else {
                this._age = newAge;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person('lose', 2);
// console.log(person.name,person.age);
console.log(person.name); // 相当于调用了get name 方法
person.age = -100; // 相当于调用了set age 方法
console.log(person.age); // 相当于调用了get age 方法
