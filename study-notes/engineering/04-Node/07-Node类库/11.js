/**
 * Created by Administrator on 2017/7/9.
 */
var a = 100;
console.log(a);//100
function sum() {
    a = 200;
    console.log(a);//200
}
sum();
console.log(a);//200
//当使用var修饰变量的时候,如果是同一个变量,那么作用域中也会修改变量的值


