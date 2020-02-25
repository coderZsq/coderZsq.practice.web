main(List<String> args) {
  sayHello1("coderZsq");
  sayHello2("coderZsq", 18, 1.88);
  sayHello3("coderZsq", height: 1.88);
}

// 必选参数: 必须传
void sayHello1(String name) {
  print(name);
}

// dart中没有函数的重载
// 可选参数: 位置可选参数 - 命名可选参数
// 注意: 只有可选参数才可以有默认值
// 位置可选参数: [int age, double height]
// 实参和形参在进行匹配时, 是根据位置的匹配
void sayHello2(String name, [int age = 10, double height = 2]) {}

// 命名可选参数
void sayHello3(String name, {int age = 10, double height = 3.14}) {}
