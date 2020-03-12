import 'package:flutter/material.dart';

main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SQHomeDemo(),
    );
  }
}

class SQHomeDemo extends StatefulWidget {
  @override
  _SQHomeDemoState createState() => _SQHomeDemoState();
}

class _SQHomeDemoState extends State<SQHomeDemo> {
  @override
  Widget build(BuildContext context) {
    print("build");
    return Scaffold(
      appBar: AppBar(
        title: Text("商品列表"),
      ),
      body: Column(
        children: [SQHomeContent()],
      ),
      floatingActionButton: RaisedButton(
        child: Icon(Icons.add),
        onPressed: () {
          setState(() {});
        },
      ),
    );
  }
}

// StatelessWidget的生命周期
//class SQHomeContent extends StatelessWidget {
//  final String message;
//
//  SQHomeContent(this.message) {
//    print("构造函数被调用");
//  }
//
//  @override
//  Widget build(BuildContext context) {
//    print("调用build方法");
//    return Text(message);
//  }
//}

// StatefulWidget的生命周期
class SQHomeContent extends StatefulWidget {
  SQHomeContent() {
    print("1. 调用SQHomeContent的constructor方法");
  }

  @override
  _SQHomeContentState createState() {
    print("2. 调用SQHomeContent的createState方法");
    return _SQHomeContentState();
  }
}

class _SQHomeContentState extends State<SQHomeContent> {
  int _counter = 0;

  _SQHomeContentState() {
    print("3. 调用_SQHomeContentState的constructor方法");
  }

  @override
  void initState() {
    // 调用: 这里是必须调用super
    super.initState();
    print("4. 调用_SQHomeContentState的initState方法");
  }

  @override
  void didUpdateWidget(SQHomeContent oldWidget) {
    super.didUpdateWidget(oldWidget);
    print("调用_SQHomeContentState的didUpdateWidget方法");
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    print("调用_SQHomeContentState的didChangeDependencies方法");
  }

  @override
  Widget build(BuildContext context) {
    print("5. 调用_SQHomeContentState的build方法");
    return Column(
      children: <Widget>[
        RaisedButton(
          child: Icon(Icons.add),
          onPressed: () {
            setState(() {
              _counter++;
            });
          },
        ),
        Text("数字:$_counter")
      ],
    );
  }

  @override
  void dispose() {
    print("6. 调用_SQHomeContentState的dispose方法");
    super.dispose();
  }
}
