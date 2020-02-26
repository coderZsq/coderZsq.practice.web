main(List<String> args) {
  var p = Person("coderZsq");
}

const temp = 20;

class Person {
  final String name;
  final int age;

  // 如果创建对象时, 有传入一个age, 那么就使用传入的age, 如果没有传入age, 那么使用一个默认值
  Person(this.name, {int age}) : this.age = temp > 20 ? 30 : 50 {}
  // Person(this.name, {this.age = temp ?? 30});

  // 保留
  // Person(this.name, {this.age = 10});
}
