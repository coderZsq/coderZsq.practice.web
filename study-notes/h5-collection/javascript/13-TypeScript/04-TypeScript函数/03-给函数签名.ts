/**
 * Created by liujun on 2018/3/2.
 */

/**1.拼接字符串的函数:joinStr1*/
// var joinStr1=function (x:string,y:string):string{
//     return x+'=>'+y;
// }
// console.log(joinStr1('lili',22));

/**2.给 joinStr1 匿名函数签名：准确知道参数的意义*/
var joinStr1:(name:string,age:string)=>string=function (x:string,y:string):string{
    return x+'=>'+y;
}

console.log(joinStr1('lose','20'));


/**3.给 callBack 函数签名：准确知道参数的意义*/
function ajar(url:string,params:{username:string,password:number},callBack:(reslut:string,error:number)=>void){
    callBack('请求成功',200);
    console.log(url,params);
}

/*发起一个网络请求*/
ajar('https://baidu.com',{username:'12323',password:123343},function (reslut:string,error:number) {
    // 拿到请求的结果 ：reslut
});



