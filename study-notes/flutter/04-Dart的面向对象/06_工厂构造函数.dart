main(List<String> args) {
  final p1 = Person.withName("coderZsq");
  final p2 = Person.withName("coderZsq");
  print(identical(p1, p2));
}

// class Person {
//   final String name;
//   final String color = "red";

//   const Person(this.name);
//   // const Person(this.color);
// }

// 普通的构造函数: 会自动返回创建出来的对象, 不能手动的返回
// 工厂构造函数最大的特点: 可以手动的返回一个对象
class Person {
  String name;
  String color;

  static final Map<String, Person> _nameCache = {};
  static final Map<String, Person> _colorCache = {};

  factory Person.withName(String name) {
    if (_nameCache.containsKey(name)) {
      return _nameCache[name];
    } else {
      final p = Person(name, "default");
      _nameCache[name] = p;
      return p;
    }
  }

  factory Person.withColor(String color) {
    if (_colorCache.containsKey(color)) {
      return _colorCache[color];
    } else {
      final p = Person("default", color);
      _colorCache[color] = p;
      return p;
    }
  }

  Person(this.name, this.color);
}
