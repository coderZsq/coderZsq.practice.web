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

class SQHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("列表测试"),
      ),
      body: Center(
        child: Stack(
          alignment: Alignment.center,
          children: <Widget>[
            GestureDetector(
              onTapDown: (details) {
                print("outer click");
              },
              child: Container(
                width: 200,
                height: 200,
                color: Colors.yellow,
              ),
            ),
            IgnorePointer(
              child: GestureDetector(
                onTapDown: (details) {
                  print("inner click");
                },
                child: Container(
                  width: 100,
                  height: 100,
                  color: Colors.red,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class GestureDemo extends StatelessWidget {
  const GestureDemo({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: GestureDetector(
        onTapDown: (details) {
          print("手指按下");
          print(details.globalPosition);
          print(details.localPosition);
        },
        onTapUp: (details) {
          print("手指抬起");
        },
        onTapCancel: () {
          print("手势取消");
        },
        onTap: () {
          print("手势点击");
        },
        onDoubleTap: () {
          print("手指双击");
        },
        onLongPress: () {
          print("长按手势");
        },
        child: Container(
          width: 200,
          height: 200,
          color: Colors.orange,
        ),
      ),
    );
  }
}

class ListenerDemo extends StatelessWidget {
  const ListenerDemo({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Listener(
        onPointerDown: (event) {
          print("指针按下: $event");
          print(event.position);
          print(event.localPosition);
        },
        onPointerMove: (event) {
//            print("指针移动: $event");
        },
        onPointerUp: (event) {
//            print("指针抬起: $event");
        },
        child: Container(
          width: 200,
          height: 200,
          color: Colors.red,
        ),
      ),
    );
  }
}
