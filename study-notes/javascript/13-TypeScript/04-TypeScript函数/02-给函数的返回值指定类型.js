/**
 * Created by liujun on 2018/3/2.
 */
/*1.返回值是基本的数据类型*/
function sum1(x, y) {
    return x + y;
}
console.log(sum1(10, 3));
/*2.返回值是联合类型*/
function sum2(x, y, type) {
    if (type == 0) {
        return x + y; //返回的number
    }
    else if (type == 1) {
        return x + '=>' + y; // 返回string
    }
}
var result = sum2(10, 30, 0);
console.log(result);
