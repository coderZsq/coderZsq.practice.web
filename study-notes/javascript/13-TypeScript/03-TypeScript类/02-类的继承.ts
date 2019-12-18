/**
 * Created by liujun on 2018/3/2.
 */
/*1.定义一个Person的类*/
class Person{
    /*2.给类添加成员属性*/
    name:string;
    age:number
    /*3.构造函数*/
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    /*4.添加方法*/
    getName(){
        return this.name;
    }
}

/*2.定义一个Student的类*/
class Student extends Person{

    /*2.添加成员属性*/
    job:string;

    constructor(name,age,job){
        /*必须放在构造器中的第一行（借用构造器函数）*/
        super(name,age);
        this.job=job;
    }

    getJob(){
        return this.job;
    }
}

/*3.新建Student的对象*/
var student=new Student('lose',3,'play');
console.log(student);


