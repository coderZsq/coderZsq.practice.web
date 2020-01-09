/**
 * Created by Administrator on 2017/6/29.
 */

var Person  = require('./test/Person.js');


//创建对象
var person1 = new Person('xiaobai',18);
console.log(person1.name);
console.log(person1.age);
person1.sayHello();