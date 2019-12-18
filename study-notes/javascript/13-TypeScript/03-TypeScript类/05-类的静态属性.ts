/**
 * Created by liujun on 2018/3/2.
 */
class Person{
    /*私有成员属性*/
    private _name:string;
    /**定义了一个静态的属性*/
    public static eyeNumber:number=2;
    
    constructor(name:string,age:number){
        this._name=name;
    }

    /*添加了一个公有的get方法*/
    public get name(){
        return this._name;
    }
    /*添加了一个公有的set方法*/
    public set name(newName:string){
        this._name=newName;
    }

    /**
     * 静态的方法
     * @returns {number}
     */
    public  static geEyeNumber():number{
        return Person.eyeNumber;
    }
}


var person=new Person('lose',2);
// console.log(person.name,person.age);
console.log(person.name); // 相当于调用了get name 方法
console.log(Person.eyeNumber); // 直接通过类名来访问静态的成员属性
console.log(Person.geEyeNumber());