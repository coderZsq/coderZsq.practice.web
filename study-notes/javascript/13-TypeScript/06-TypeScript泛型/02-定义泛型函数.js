/**
 * Created by liujun on 2018/3/2.
 */
/**1.定义一个指定类型的函数*/
function show1(str) {
    return str;
}
/*参数必须是字符串（固定死）*/
console.log(show1('lose'));
/**2.定义一个任意类型的函数: 重用性*/
function show2(str) {
    return str;
}
console.log(show2('sdfsdfsd'));
console.log(show2(234234));
console.log(show2(false));
/**3.定义一个泛型函数：重用性，灵活性*/
function show3(str) {
    return str;
}
console.log(show3(10010));
console.log(show3('ppp'));
/**4.定义泛型函数的类型：灵活性高,可以适用于不同的类型*/
/*匿名函数固定类型*/
var show4 = function (str) {
    return str;
};
console.log(show4('ggsf'));
var show5 = function (t) {
    return t;
};
console.log(show5(1000));
console.log(show5('pppp'));
