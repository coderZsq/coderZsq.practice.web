/**
 * Created by Administrator on 2017/7/9.
 */

//let的使用,只会在对应的作用域中起作用,不会对外界有影响

let a = 100;
console.log(a);//100
function sum() {
   let  a = 200;
    console.log(a);//200
}
sum();

console.log(a);//100