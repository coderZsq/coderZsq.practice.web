/**
 * Created by liujun on 2018/3/2.
 */

/*1.返回值是基本的数据类型*/
function sum1(x:number,y:number):number{
    return x+y;
}

console.log(sum1(10,3));

/*2.返回值是联合类型*/
function sum2(x:number,y:number,type:number):number|string{
    if(type==0){
        return x+y; //返回的number
    }else if(type==1){
        return x+'=>'+y; // 返回string
    }
}
var result:number|string=sum2(10,30,0);
console.log(result);

