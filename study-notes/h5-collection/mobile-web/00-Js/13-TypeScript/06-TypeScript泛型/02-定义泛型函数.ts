/**
 * Created by liujun on 2018/3/2.
 */
/**1.定义一个指定类型的函数*/
function show1(str:string):string{
   return str;
}

/*参数必须是字符串（固定死）*/
console.log(show1('lose'));


/**2.定义一个任意类型的函数: 重用性*/
function show2(str:any):string{
    return str;
}
console.log(show2('sdfsdfsd'));
console.log(show2(234234));
console.log(show2(false));

/**3.定义一个泛型函数：重用性，灵活性*/
function show3<T>(str:T):T{
    return str;
}

console.log( show3<number>(10010) );
console.log(show3<string>('ppp'));



/**4.定义泛型函数的类型：灵活性高,可以适用于不同的类型*/
/*匿名函数固定类型*/
var show4:(str:string)=>string=function (str:string):string {
    return str
}

console.log(show4('ggsf'));
var show5:<T>(t:T)=>T=function <T>(t:T):T {
    return t
}

console.log(show5<number>(1000));
console.log(show5<string>('pppp'));














