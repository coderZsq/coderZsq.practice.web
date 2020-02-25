main(List<String> args) {
  // 1. ??=:
  // 当原来的变量有值时, 那么??=不执行
  // 原来的变量为null, 那么将值赋值给这个变量
  // var name = null;
  // name ??= "Castie!";
  // print(name);

  // ??:
  // ??前面的数据有值, 那么就使用??前面的数据
  // ??前面的数据为null, 那么久使用后面的值
  var name = "coderZsq";
  var temp = name ?? "Castie!";
  print(temp);
}
