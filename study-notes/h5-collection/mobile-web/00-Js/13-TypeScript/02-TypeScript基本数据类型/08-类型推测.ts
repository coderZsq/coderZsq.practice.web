/**
 * Created by liujun on 2018/3/1.
 */
/**1.ts语法*/
var a=12; // typescript编译器在编译的时候会推测a变量的类型为number

// a='sdf';

var arr1=[1,2,3,4]; // typescript编译器在编译的时候会推测arr1 numer []


var arr2=[a,false,'sdf']; // arr2 --> any []
arr2[3]='sdf';
arr2[4]=true;