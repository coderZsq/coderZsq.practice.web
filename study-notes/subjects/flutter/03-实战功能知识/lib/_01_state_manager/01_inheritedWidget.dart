import 'package:flutter/material.dart';

main() => runApp(MyApp());

class SQCounterWidget extends InheritedWidget {
  // 1. 共享的数据
  final int counter;

  // 2. 定义构造方法
  SQCounterWidget({this.counter, Widget child}) : super(child: child);

  // 3. 获取组件最近的当前InheritedWidget
  static SQCounterWidget of(BuildContext context) {
    // 沿着Element树, 去找到最近的SQCounterElement, 从Element中取出Widget对象
    return context.dependOnInheritedWidgetOfExactType();
  }

  // 4. 决定要不要回调State中的didChangeDependencies
  // 如果返回为true: 执行依赖当前的InheritedWidget的State中的didChangeDependencies
  @override
  bool updateShouldNotify(SQCounterWidget oldWidget) {
    return oldWidget.counter != counter;
  }
}

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

class SQHomePage extends StatefulWidget {
  @override
  _SQHomePageState createState() => _SQHomePageState();
}

class _SQHomePageState extends State<SQHomePage> {
  int _counter = 100;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("InheritedWidget"),
      ),
      body: SQCounterWidget(
        counter: _counter,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[SQShowData01(), SQShowData02()],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () {
          setState(() {
            _counter++;
          });
        },
      ),
    );
  }
}

class SQShowData01 extends StatefulWidget {
  @override
  _SQShowData01State createState() => _SQShowData01State();
}

class _SQShowData01State extends State<SQShowData01> {

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    print("执行了_SQShowData01State中的didChangeDependencies");
  }

  @override
  Widget build(BuildContext context) {
    int counter = SQCounterWidget.of(context).counter;

    return Card(
      color: Colors.red,
      child: Text("当前计数: $counter", style: TextStyle(fontSize: 30)),
    );
  }
}

class SQShowData02 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    int counter = SQCounterWidget.of(context).counter;

    return Card(
      color: Colors.blue,
      child: Text("当前计数: $counter", style: TextStyle(fontSize: 30)),
    );
  }
}
