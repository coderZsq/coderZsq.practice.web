class Person {
  name: string = '123';

  eating() {}
}

const p = new Person();

const p1: Person = {
  name: 'sq',
  eating() {},
};

function printPerson(p: Person) {
  console.log(p.name);
}

printPerson(new Person());
printPerson({ name: 'kobe', eating: function () {} });

export {}
