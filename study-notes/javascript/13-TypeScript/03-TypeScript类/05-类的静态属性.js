/**
 * Created by liujun on 2018/3/2.
 */
var Person = (function () {
    function Person(name, age) {
        this._name = name;
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
    /**
     * 静态的方法
     * @returns {number}
     */
    Person.geEyeNumber = function () {
        return Person.eyeNumber;
    };
    /**定义了一个静态的属性*/
    Person.eyeNumber = 2;
    return Person;
}());
var person = new Person('lose', 2);
// console.log(person.name,person.age);
console.log(person.name); // 相当于调用了get name 方法
console.log(Person.eyeNumber); // 直接通过类名来访问静态的成员属性
console.log(Person.geEyeNumber());
