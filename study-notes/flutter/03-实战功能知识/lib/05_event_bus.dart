import 'package:event_bus/event_bus.dart';
import 'package:flutter/material.dart';

// 1. 创建全局的EventBus对象
final eventBus = EventBus();

class UserInfo {
  String nickname;
  int level;

  UserInfo(this.nickname, this.level);
}

main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Flutter Demo",
      theme: ThemeData(
          primarySwatch: Colors.blue, splashColor: Colors.transparent),
      home: SQHomePage(),
    );
  }
}

class SQHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("列表测试"),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[SQButton(), SQText()],
          ),
        ));
  }
}

class SQButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RaisedButton(
        child: Text("按钮"),
        onPressed: () {
          // 2. 发出事件
          final info = UserInfo("coderZsq", 18);
          eventBus.fire(info);
        });
  }
}

class SQText extends StatefulWidget {
  @override
  _SQTextState createState() => _SQTextState();
}

class _SQTextState extends State<SQText> {
  String _message = "Hello World";

  @override
  void initState() {
    super.initState();

    // 3. 监听事件的类型
    eventBus.on<UserInfo>().listen((data) {
      print(data.nickname);
      print(data.level);
      setState(() {
        _message = "${data.nickname}-${data.level}";
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Text(
      _message,
      style: TextStyle(fontSize: 20),
    );
  }
}
