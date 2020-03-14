import 'dart:io';

main(List<String> args) {
  print("main start");
  var result = getNetworkData().then((res) {
    print(res);
  });
  print(result);
  print("main end");
}

/**
 * 解决两个问题
 * 1. await必须在async函数中才能使用
 * 2. async函数返回的结果必须是一个Futrue
 */
Future getNetworkData() async {
  await sleep(Duration(seconds: 3));
  return "Hello World";
}

// Future getNetworkData() {
//   return Future(() {
//     sleep(Duration(seconds: 3));
//     return "Hello World";
//   });
// }
