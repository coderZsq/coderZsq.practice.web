/*
* 变量声明提升: 会把一个变量的声明提升到执行环境的最上面
* */
(function() {
    console.log(a); // undefined
    var a = 20;
    console.log(a); // 20
})();

/*
* 函数声明整体提升执行环境的最上面
* */
(function () {
    console.log(a); // [Function: a]
    function a() {
        
    }
})();

(function () {
    console.log(a); // undefined
    var a = function () {
        
    };
})();

(function () {
    console.log(a); // [Function: a]
    var a = 20;
    function a() {
        
    }
})();

/*
* 1. 任何直接赋值的变量都归属于全局对象(全局域)
* window: 表示全局对象或者叫全局域
* */
(function () {
    b = 20;
    console.log(b); // 20
    console.log(window.b); // 20
})();

/*
* 定义在整体的执行环境中的变量叫做全局变量, 定义在函数中的变量叫做局部变量
* */
(function () {
    function test() {
        var a = b = 20;
    }
    test();
})();

/*
* 2. 任何全局定义的变量都属于window对象
* */
var a = 20;
console.log(window.a); // 20

/*
* 1. 先整体检测语法是否正确
* 2. 预编译(执行代码之前)
* 3. 执行代码: js从上到下执行
* */

/*
* 预编译的过程:
* 1. 对于函数而言一般先要创建一个AO(执行上下文对象)
* 2. 找到形式参数和变量声明为AO对象的属性, 然后赋值undefined
* 3. 把实参和形参统一
* 4. 找到函数声明作为AO的属性, 然后赋值函数体
* */
/*
* AO = {
*   a: undefined -> 1 -> [Function: a] -> 20,
*   b: undefined
* }
* */
(function () {
    function test(a) {
        console.log(a); // [Function: a]
        var a = 20;
        console.log(a); // 20
        function a() {

        }
        console.log(a); // 20
        console.log(b); // undefined
        var b = function () {

        };
        console.log(b) // [Function: a]
    }
    test(1);
})();

/*
* 对于整体的执行环境会产生一个go对象
* 也会有预编译
* 执行过程和AO是一致的但是没有第三步
* 1. 创建go对象
* 2. 找到变量声明作为go的属性, 赋值undefined
* 3. 找到函数声明作为属性, 赋值对应的函数的值
* */
/*
* go {
*   a: undefined -> [Function: a] -> 20
* }
* */
console.log(a); // [Function: a]
var a = 20;
function a() {
    
}