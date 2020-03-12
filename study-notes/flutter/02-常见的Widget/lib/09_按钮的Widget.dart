import 'package:flutter/material.dart';

main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SQHomePage(),
    );
  }
}

class SQHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("基础Widget")),
      body: SQHomeContent(),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () => print("FloatingActionButton Click"),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}

class SQHomeContent extends StatefulWidget {
  @override
  _SQHomeContentState createState() => _SQHomeContentState();
}

class _SQHomeContentState extends State<SQHomeContent> {
  @override
  Widget build(BuildContext context) {
    return ButtonDemo();
  }
}

class ButtonDemo extends StatelessWidget {
  const ButtonDemo({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        // 1. RaisedButton
        RaisedButton(
          child: Text("RaisedButton"),
          textColor: Colors.white,
          color: Colors.purple,
          onPressed: () => print("RaiseButton Click"),
        ),
        // 2. FlatButton
        FlatButton(
          child: Text("FlatButton"),
          color: Colors.orange,
          onPressed: () => print("FlatButton Click"),
        ),
        // 3. OutlineButton
        OutlineButton(
          child: Text("OutlineButton"),
          onPressed: () => print("OutlineButton"),
        ),
        // 4. FloatingActionButton
        // FloatingActionButton(),
        // 5. 自定义button: 图标-文字-背景-圆角
        FlatButton(
          color: Colors.amberAccent,
          shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8)
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              Icon(Icons.favorite, color: Colors.red),
              Text("喜欢作者")
            ],
          ),
          onPressed: () {},
        )
      ],
    );
  }
}
