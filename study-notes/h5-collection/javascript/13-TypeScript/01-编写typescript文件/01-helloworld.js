/**
 * Created by liujun on 2018/3/1.
 */
var Person = (function () {
    function Person() {
    }
    Person.prototype.show = function () {
        console.log('show');
    };
    Person.prototype.sum = function () {
        console.log('sum');
    };
    Person.prototype.add = function () {
        console.log('sdf');
    };
    return Person;
}());
