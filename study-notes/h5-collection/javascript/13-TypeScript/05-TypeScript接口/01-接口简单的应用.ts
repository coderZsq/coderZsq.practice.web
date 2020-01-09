/**
 * Created by liujun on 2018/3/2.
 */

/**1.封装一个网络请求的函数*/
function ajar(url:string,params:{username:string,password:number},callBack:(result:string,error?:number)=>void){

    console.log(url,params);
    callBack('请求成功');
}

/**2.发起一个网络请求*/
ajar('https://www.baiduc.com',{username:'jack',password:123456},function (result:string,error?:number) {
    console.log(result);
})
