// <img id="sq"/>

// 1. 类型断言 as
const el = document.getElementById('sq') as HTMLImageElement;
el.src = 'url地址';

// 2. 另外案例: Person是Student的父类
class Person {}

class Student extends Person {
  studying() {}
}

function sayHello(p: Person) {
  (p as Student).studying();
}

const stu = new Student();
sayHello(stu);

// 3. 了解: as any/unknown
const message = 'Hello World';
// const num: number = message as unknown as number;
