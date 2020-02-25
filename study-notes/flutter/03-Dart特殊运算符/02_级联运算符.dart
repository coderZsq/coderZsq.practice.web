main(List<String> args) {
  // var p = Person();
  // p.name = 'coderZsq';
  // p.run();
  // p.eat();

  // 级联运算符
  var p = Person()
    ..name = "coderZsq"
    ..eat()
    ..run();
}

class Person {
  String name;
  void run() {
    print("running");
  }

  void eat() {
    print("eating");
  }
}
