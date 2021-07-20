// protected: 在类内部和子类中可以访问

class Person {
  protected name: string = '123';
}

class Student extends Person {
  getName() {
    return this.name;
  }
}

const stu = new Student();
console.log(stu.getName());

export {};
