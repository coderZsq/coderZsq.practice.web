main(List<String> args) {
  // 1. 直接找到另外一个定义的函数传进去
  // test(bar);

  // 2. 匿名函数 (参数列表) {函数体}
  test(() {
    print("匿名函数被调用");
    return 10;
  });

  // 3. 箭头函数: 条件, 函数体只有一行代码
  test(() => print("箭头函数被调用"));
}

// 函数可以作为另外一个函数的参数
void test(Function foo) {
  var result = foo();
}

void bar() {
  print("bar函数被调用");
}
