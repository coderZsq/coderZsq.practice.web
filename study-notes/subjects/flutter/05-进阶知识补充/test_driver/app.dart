import 'package:flutter_driver/driver_extension.dart';
import 'package:flutterapp/_02_test/main.dart' as app;

void main() {
  // 1. 初始化Driver
  enableFlutterDriverExtension();

  // 2. 启动应用程序
  app.main();

  // 3. $ flutter driver --target=test_driver/app.dart
}