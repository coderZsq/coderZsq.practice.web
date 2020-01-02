/**
 * Created by admin on 2019/7/24.
 */
/*实现对应的转化方法*/
/*1.转化字符串为对象*/
const assert = require('assert');
function parse(str) {
    let obj = {};
    /*str格式 name=xmg&age = 20*/
    let arr = str.split('&');
    arr.forEach((item)=>{
        let [key,value] =item.split('=');
        obj[key] = value;
    })
    return obj;

}
/*2.转化对象为字符串*/
function stringfy(obj) {
    let arr  = [];
    for(let key in obj){
        arr.push(key +'='+ obj[key]);

    }
    return arr.join('&');

}
exports.parse = parse;
exports.stringfy = stringfy;
/*一般我们做测试*/
// console.log(parse('name=xmg&age=10').name == 'xmg');
// console.log(stringfy({name:'xmg',age:4}));
/*断言：断言表示如果我们判断的结果和我们预期的相符，什么事情都不做，如果不相符
* 就报错,一般使用的时候，第一个就是我们需要测试的用例，第二个表示对应的提示*/
assert(parse('name=xmg&age=10').name == 'xmg','用户名必须是xmg')