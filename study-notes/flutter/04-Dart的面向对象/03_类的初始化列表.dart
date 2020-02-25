main(List<String> args) {
  var p = Person("coderZsq");
}

class Person {
  final String name;
  final int age;

  Person(this.name, {int age}) : this.age = age ?? 10 {
    // this.age = 10;
  }

  // 保留
  // Person(this.name, {this.age = 10});
}
