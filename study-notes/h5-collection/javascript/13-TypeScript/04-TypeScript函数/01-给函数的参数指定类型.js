/**
 * Created by liujun on 2018/3/2.
 */
/**1.js语法*/
function sum1(x, y) {
    return x + y;
}
var sum2 = function (x, y) {
    return x + y;
};
/**2.ts语法*/
function sum3(x, y) {
    return x + y;
}
var sum4 = function (x, y) {
    return x + y;
};
console.log(sum3(10, 5)); //正确的调用
// console.log(sum3(10,5,10));// 不正确的调用
// console.log(sum3(10)); // 不正确的调用
