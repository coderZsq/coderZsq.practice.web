main(List<String> args) {
  // 1. 创建Person对象
  var p = Person.withNameAgeHeight("coderZsq", 18, 1.88);
  print(p.toString());

  var p1 = Person.fromMap({"name": "coderZsq", "age": 18, "height": 1.88});
  print(p1);

  // 2. 知识点: Object和dynamic的区别
  // 父类引用指向子类对象
  // Object和dynamic
  // Object调用方法时, 编译时会报错
  // dynamic调用方法时, 编译时不报错, 但是运行时会存在安全隐患

  // Object obj = "coderZsq";
  // print(obj.substring(1));

  // 明确声明
  dynamic obj = "coderZsq";
  print(obj.substring(1));
}

class Person {
  String name;
  int age;
  double height;

  Person(this.name, this.age);
  // Person(this.name, this.age, this.height);

  // 命名构造函数
  Person.withNameAgeHeight(this.name, this.age, this.height);
  Person.fromMap(Map<String, dynamic> map) {
    this.name = map["name"];
    this.age = map["age"];
    this.height = map["height"];
  }

  @override
  String toString() {
    return "$name $age $height";
  }
}
