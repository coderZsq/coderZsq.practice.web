/**
 * Created by liujun on 2018/3/2.
 */
class Person{
    /*私有成员属性*/
    private _name:string;
    private _age:number;
    
    constructor(name:string,age:number){
        this._name=name;
        this._age=age;
    }

    /*添加了一个公有的get方法*/
    public get name(){
        return this._name;
    }
    /*添加了一个公有的set方法*/
    public set name(newName:string){
        this._name=newName;
    }
    /*添加了一个公有的get方法*/
    public get age(){
        return this._age;
    }
    /*添加了一个公有的set方法*/
    public  set age(newAge:number){
        /**在这里可以进行容错的判断*/
        if(newAge<0 || newAge > 200){
            throw '输入的年龄有错'
        }else{
            this._age=newAge;
        }

    }
}


var person=new Person('lose',2);
// console.log(person.name,person.age);
console.log(person.name); // 相当于调用了get name 方法
person.age = -100; // 相当于调用了set age 方法
console.log(person.age);// 相当于调用了get age 方法