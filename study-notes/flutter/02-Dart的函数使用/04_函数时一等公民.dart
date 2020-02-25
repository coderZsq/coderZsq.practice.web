main(List<String> args) {
  // test((abc) {
  //   print(abc);
  // });

  test((num1, num2) {
    return num1 + num2;
  });

  var demo1 = demo();
  print(demo1(20, 30));
}

// 封装test函数, 要求: 传入一个函数
// void test(Function foo) {
//   foo("coderZsq");
// }

typedef Calculate = int Function(int num1, int num2);

// void test(int foo(int num1, int num2)) {
//   foo(20, 30);
// }

void test(Calculate calc) {
  calc(20, 30);
}

Calculate demo() {
  return (num1, num2) {
    return num1 * num2;
  };
}
