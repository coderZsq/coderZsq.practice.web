/**
 * Created by liujun on 2018/3/2.
 */
/**1.固定参数的函数*/
function buildName1(firstName, lastName) {
    return firstName + '=>' + lastName;
}
console.log(buildName1('li', 'si')); // 正确的调用
// console.log(buildName1('li')); // 不正确
// console.log(buildName1('li','si','guang')); // 不正确
// console.log(buildName1('li',12));  // 不正确
/**2.可选参数的函数  ? */
function buildName2(firstName, lastName) {
    return firstName + '=>' + lastName;
}
console.log(buildName2('huang', 'si')); // 正确的调用
console.log(buildName2('huang')); // 正确
// console.log(buildName2('li','si','guang')); // 不正确
// console.log(buildName2('li',12));  // 不正确
/**3.默认参数 的函数*/
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = 'si'; }
    return firstName + '=>' + lastName;
}
console.log(buildName3('cheng', 'fang')); // 正确的调用
console.log(buildName3('cheng')); // 正确
// console.log(buildName3('li','si','guang')); // 不正确
// console.log(buildName3('li',12));  // 不正确
/**4.（剩余）可变参数*/
function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + '-' + restOfName.join('-');
}
console.log(buildName4('lose', 'jack', 'lili', 'laowang', 'laoli'));
