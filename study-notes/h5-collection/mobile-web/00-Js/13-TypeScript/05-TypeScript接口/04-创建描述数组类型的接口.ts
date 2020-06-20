/**
 * Created by liujun on 2018/3/2.
 */
/**创建一个接口（定义一个约束）*/
interface Params{
    /*数组*/
    [index:number]:string;
}

/**定义了一个CallBack接口（约束）*/
interface CallBack{
    /*属性*/
    /*函数*/
    (result:string,error?:number):void;
}


/**1.封装一个网络请求的函数*/
function ajar(url:string,params:Params,callBack:CallBack){

    console.log(url,params);
    callBack('请求成功');
}

/**2.发起一个网络请求*/
var params:Params=['lose','123456'];
/*实现了CallBack接口的规范（约束）*/
var callback:CallBack=function (result:string,error?:number):void{

}
ajar('https://www.baidu.com',params,callback);
