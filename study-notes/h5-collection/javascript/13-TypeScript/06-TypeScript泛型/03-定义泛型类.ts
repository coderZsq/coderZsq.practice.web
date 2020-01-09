/**
 * Created by liujun on 2018/3/2.
 */

/**1.定义普通的GenericNumber1类*/
class GenericNumber1{

    value:number;

    constructor(val:number){
        this.value=val;
    }
    show(val:number){
        console.log(this.value+val);
    }
}

var genericNumber1=new GenericNumber1(100);
genericNumber1.show(200);

/**2.定义一个泛型类GenericNumber2*/
class GenericNumber2<T>{

    value:T;

    constructor(t:T){
        this.value=t;
    }
    show(t:T){
        console.log(this.value,t);
    }
}

var genericNumber2=new GenericNumber2<number>(1000);
genericNumber2.show(2000);

var genericNumber3=new GenericNumber2<string>('lose');
genericNumber3.show('lili');





