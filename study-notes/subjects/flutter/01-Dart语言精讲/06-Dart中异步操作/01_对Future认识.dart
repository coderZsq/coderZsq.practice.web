import 'dart:io';

main(List<String> args) {
  print("main start");
  // 发送一个网络请求
  var future = getNetworkData();
  print(future);

  // 2. 拿到数据 (dynamic)
  // then后面的回调函数什么时候执行?
  // 需要在Future(函数)有结果, 才执行下面的回调函数
  future.then((String value) {
    print(value);
  }).catchError((err) {
    print("执行catchError代码: $err -------");
  }).whenComplete(() {
    print("代码执行完成");
  });

  print("main end");
}

// 模拟一个网络请求
Future<String> getNetworkData() {
  return Future<String>(() {
    // 1. 将耗时的操作包裹到Future的回调函数中
    // 1> 只要有返回结果, 那么就执行Future对应的then的回调(Promise-resolve)
    // 2> 如果没有结果返回(有错误信息), 需要在Future回调中抛出一个异常(Promise-reject)
    sleep(Duration(seconds: 3));
    // return "Hello World";
    throw Exception("我是错误信息");
  });
}
