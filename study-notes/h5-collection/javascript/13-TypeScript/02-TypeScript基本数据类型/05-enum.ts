/**
 * Created by liujun on 2018/3/1.
 */
/**1.js语法*/
var College1={
        IOS:0,
        Android:1,
        HTML5:2,
        UI:3
}
console.log(College1.Android); // 1

/**2.ts语法*/
/*定义了一个枚举College2*/
enum College2{
    IOS=10,
    Android=11,
    HTML5=13,
    UI=15
}

/*使用定义的枚举*/
console.log(College2);

/*返回的结果是枚举类型*/
var result:College2=College2.IOS; //College2
var College2Name:string=College2[13]; //string

console.log(result); // 0
console.log(College2Name); //HTML5