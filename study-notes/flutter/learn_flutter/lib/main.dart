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

// flag: 状态
// Stateful不能定义状态 -> 创建一个单独的类, 这个类负责维护状态
class SQContentBody extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return SQContentBodyState();
  }
}

class SQContentBodyState extends State<SQContentBody> {
  var flag = true;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Checkbox(
            value: flag,
            onChanged: (value) {
              setState(() {
                flag = value;
              });
            },
          ),
          Text(
            "同意协议",
            style: TextStyle(fontSize: 20),
          )
        ],
      ),
    );
  }
}
