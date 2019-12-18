/**
 * Created by liujun on 2018/3/2.
 */
/**1.js语法*/

/*1.构造器函数*/
function Person(name,age){
    this.name=name;
    this.age=age;
}
/*2.添加方法*/
Person.prototype.getName=function () {
    return this.name;
}
/*3.创建person对象*/
var person=new Person('jack',13);
console.log(person);


/**2.ts语法*/
/*1.定义一个Person类*/
class  Person2{
    /*2.成员属性*/
    name:string;
    age:number;

    /*3.构造器函数*/
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    /*4.添加方法*/
    getName(){
        return this.name;
    }

}

/*5.创建一个Person的对象*/
var person2=new Person2('lose',20);
console.log(person2);