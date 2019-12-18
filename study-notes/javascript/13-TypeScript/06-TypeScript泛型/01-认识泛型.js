/**
 * Created by liujun on 2018/3/2.
 */
var arr1 = [1, 2, 3, 4]; // typescript编译器，编译器在编译的时候，类型推测：number
// arr1[4]='sdf';
var arr2 = ['12', 'sdf', 'sdfs']; // typescript编译器，编译器在编译的时候，类型推测：string []
/*泛型：重用心，灵活*/
var arr3 = new Array(); // number
arr3[0] = 1;
arr3[1] = 2;
var arr4 = new Array(); // number
