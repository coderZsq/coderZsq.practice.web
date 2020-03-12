main(List<String> args) {
  var p = Person("coderZsq");
  print(p.age);
}

class Person {
  String name;
  int age;

  // Person(this.name) : age = 0;
  // 构造函数的重定向
  Person(String name) : this._internal(name, 0);
  Person._internal(this.name, this.age);
}
