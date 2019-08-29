/*
* 类数组本质是一个对象: 但是这个对象可以当成数组来使用
* 想要使一个对象成为一个类数组必须满足下面的条件
* 1. 使用索引作为属性值
* 2. 必须有length属性
* */
(function () {
    var obj = {
        0: '我是1',
        1: '我是2',
        length: 2,
        splice: Array.prototype.splice
    };
    console.log(obj[0]);
    console.log(obj)
})();

(function () {
    var obj = {
        2: '我是测试',
        3: '我是测试',
        length: 2,
        push: Array.prototype.push
    };
    Array.prototype.push = function (target) {
        obj[obj.length] = target;
        obj.length++;
    };
    obj.push('30');
    console.log(obj);
})();