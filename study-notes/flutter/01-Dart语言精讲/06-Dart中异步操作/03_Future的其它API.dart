main(List<String> args) {
  // Future(() {
  //   return "Hello World";
  // }).then((res) {
  //   print(res);
  // });
  Future.value("哈哈哈").then((res) {
    print(res);
  });

  Future.error("错误信息").catchError((err) {
    print(err);
  });

  Future<String>.delayed(Duration(seconds: 3), () {
    return "Hello Flutter";
  }).then((res) {
    print(res);
    return "Hello World";
  }).then((res) {
    print(res);
  });
}
