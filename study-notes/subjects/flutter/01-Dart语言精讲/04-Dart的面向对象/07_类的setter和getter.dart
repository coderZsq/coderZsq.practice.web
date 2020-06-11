main(List<String> args) {
  final p = Person();

  // 直接访问属性
  p.name = "coderZsq";
  print(p.name);

  // 通过getter和setter访问
  p.setName = "coderZsq";
  print(p.getName);
}

class Person {
  String name;

  // setter
  set setName(String name) => this.name = name;
  // getter
  String get getName => name;
}
