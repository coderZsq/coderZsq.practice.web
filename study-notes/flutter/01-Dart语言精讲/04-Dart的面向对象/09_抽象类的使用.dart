main(List<String> args) {
  final s = Shape();

  final map = Map();
  print(map.runtimeType);
}

// 注意二: 抽象类不能实例化
abstract class Shape {
  int getArea();
  String getInfo() {
    return "形状";
  }

  factory Shape() {
    return null;
  }
}

// 注意一: 继承自抽象类后, 必须实现抽象类的抽象方法
// class Rectangle extends Shape {
//   @override
//   int getArea() {
//     return 100;
//   }
// }
