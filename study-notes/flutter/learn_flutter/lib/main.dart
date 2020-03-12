import 'package:flutter/material.dart';

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

class SQHomePage extends StatefulWidget {
  @override
  _SQHomePageState createState() => _SQHomePageState();
}

class _SQHomePageState extends State<SQHomePage> {
  ScrollController _controller = ScrollController(initialScrollOffset: 300);
  bool _isShowFloatingBtn = false;

  @override
  void initState() {
    super.initState();
    _controller.addListener(() {
//      print("监听到滚动... : ${_controller.offset}");
      setState(() {
        _isShowFloatingBtn = _controller.offset >= 1000;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    /**
     * 两种方式可以监听:
     * controller:
     *  1. 可以设置默认值offset
     *  2. 监听滚动, 也可以监听滚动的位置
     * NotificationListener
     *  1. 开始滚动和结束滚动
     */
    return Scaffold(
      appBar: AppBar(title: Text("列表测试")),
      body: NotificationListener(
        onNotification: (ScrollNotification notification) {
          if (notification is ScrollStartNotification) {
            print("开始滚动");
          } else if (notification is ScrollUpdateNotification) {
            print("正在滚动..., 总滚动举例: ${notification.metrics.maxScrollExtent}, 当前滚动的位置: ${notification.metrics.pixels}");
          } else if (notification is ScrollEndNotification) {
            print("结束滚动");
          }
          return true;
        },
        child: ListView.builder(
            controller: _controller,
            itemCount: 100,
            itemBuilder: (BuildContext ctx, int index) {
              return ListTile(
                leading: Icon(Icons.people),
                title: Text("联系人$index"),
              );
            }),
      ),
      floatingActionButton: _isShowFloatingBtn
          ? FloatingActionButton(
              child: Icon(Icons.arrow_upward),
              onPressed: () {
                _controller.animateTo(0,
                    duration: Duration(seconds: 1), curve: Curves.easeIn);
              },
            )
          : null,
    );
  }

  @override
  void dispose() {
    super.dispose();
    _controller.dispose();
  }
}
