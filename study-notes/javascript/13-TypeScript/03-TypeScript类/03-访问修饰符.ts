/**
 * Created by liujun on 2018/3/2.
 */
/*1.定义一个Person的类*/
class Person{
    /*2.给类添加成员属性*/
    // private name:string;
    // protected age:number

    /*3.构造函数*/
    constructor(private name:string,protected age:number){
        // this.name=name;
        // this.age=age;
    }
    /*4.添加方法*/
    public getName(){
        return this.name;
    }
}

/*2.定义一个Student的类*/
class Student extends Person{

    /*2.添加成员属性*/
    public job:string;

    constructor(name,age,job){
        /*必须放在构造器中的第一行（借用构造器函数）*/
        super(name,age);
        this.job=job;
    }

    public getJob(){
        return this.job+'=>';
        // return this.job+'=>'+this.name;
    }
}

/*3.新建Student的对象*/
var student=new Student('lose',3,'play');

console.log(student,student.getJob());
// console.log(student,student.getJob(),student.name);


