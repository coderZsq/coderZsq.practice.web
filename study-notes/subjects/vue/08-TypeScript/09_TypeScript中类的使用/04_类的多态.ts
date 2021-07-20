class Animal {
  action() {
    console.log('animal action');
  }
}

class Dog extends Animal {
  action() {
    console.log('dog running!!!');
  }
}

class Fish extends Animal {
  action() {
    console.log('fish swimming');
  }
}

class Person extends Animal {}

// animal: dog/fish
// 多态的目的是为了写出更加具备通用性的代码
function makeActions(animals: Animal[]) {
  animals.forEach((animals) => {
    animals.action();
  });
}

makeActions([new Dog(), new Fish(), new Person()]);
