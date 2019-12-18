/**
 * Created by liujun on 2018/3/2.
 */
/**创建一个接口（定义一个约束）*/
interface Params{
    /*属性*/
    username:string;
    password:number;
    id?:number;
}

/**1.封装一个网络请求的函数*/
function ajar(url:string,params:Params,callBack:(result:string,error?:number)=>void){

    console.log(url,params);
    callBack('请求成功');
}

/**2.发起一个网络请求*/
var params:Params={username:'lili',password:1234,id:100010};
ajar('https://www.baidu.com',params,function (result:string,error?:number) {

})
