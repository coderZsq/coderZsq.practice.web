class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log('eating 100行');
  }
}

class Student extends Person {
  sno: number;

  constructor(name: string, age: number, sno: number) {
    // super调用父类的构造器
    super(name, age);
    this.sno = sno;
  }

  eating() {
    super.eating();
    console.log('student eating');
  }

  studying() {
    console.log('studying');
  }
}

const stu = new Student('sq', 18, 111);
console.log(stu.name);
console.log(stu.age);
console.log(stu.sno);

stu.eating();

export {};
