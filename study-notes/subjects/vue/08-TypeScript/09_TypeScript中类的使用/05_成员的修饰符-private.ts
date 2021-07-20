class Person {
  private name: string = '';

  // 封装了两个方法, 通过方法来访问name
  getName() {
    return this.name;
  }

  setName(newName: string) {
    this.name = newName;
  }
}

const p = new Person();
p.setName('sq');
console.log(p.getName());

export {};
