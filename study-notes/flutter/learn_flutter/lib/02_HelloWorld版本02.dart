import 'package:flutter/material.dart';

main() => runApp(MyApp());

/// widget:
/// 有状态的widget: StatefulWidget 在运行过程中有一些状态(data)需要改变
/// 无状态的Widget: StatelessWidget 内容是确定的没有状态(data)的改变
class MyApp extends StatelessWidget {
  // build
  @override
  Widget build(BuildContext context) {
    return MaterialApp(debugShowCheckedModeBanner: false, home: SQHomePage());
  }
}

class SQHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("第一个Flutter程序"),
      ),
      body: SQContentBody(),
    );
  }
}

class SQContentBody extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text("Hello World",
          style: TextStyle(fontSize: 40, color: Colors.orange)),
    );
  }
}
