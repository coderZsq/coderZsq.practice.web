main(List<String> args) {}

class Animal {
  int age;
  Animal(this.age);
}

class Person extends Animal {
  String name;

  Person(this.name, int age) : super(age);
}
