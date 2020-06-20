/**
 * Created by liujun on 2018/3/2.
 */
/**1.定义一个动物的接口（规范，约定）*/
interface Animal{
    /*属性*/
    name:string;
    age:number;
    /*函数*/
    eat(food:string):void;
}

/**2.创建一个Person类*/
class Person implements Animal{

    /*属性*/
    name:string;
    age:number;

    /*函数*/
    eat(food:string):void{
        console.log(food);
    }

}

new Person().eat('米饭1');

class Student implements  Animal{
    /*属性*/
    name:string;
    age:number;

    /*函数*/
    eat(food:string):void{
        console.log(food);
    }
}

new Student().eat('米饭2');