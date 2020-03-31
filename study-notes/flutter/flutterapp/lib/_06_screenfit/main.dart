import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutterapp/_06_screenfit/shared/size_fit.dart';

main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    SQSizeFit.initialize();

    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
          primarySwatch: Colors.blue, splashColor: Colors.transparent),
      home: SQHomePage(),
    );
  }
}

class SQHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // 2. 手机屏幕的大小(逻辑分辨率)
    final width = MediaQuery.of(context).size.width;
    final height = MediaQuery.of(context).size.height;
    final statusHeight = MediaQuery.of(context).padding.top;
    print("屏幕宽高: $width * $height");
    print("状态栏的高度: $statusHeight");
    print(SQSizeFit.screenWidth);

    return Scaffold(
      appBar: AppBar(
        title: Text("首页"),
      ),
      body: Center(
        child: Container(
          width: SQSizeFit.setRpx(400),
          height: SQSizeFit.setPx(200),
          color: Colors.red,
          alignment: Alignment.center,
          child: Text(
            "Hello World",
            style: TextStyle(fontSize: SQSizeFit.setRpx(40)),
          ),
        ),
      ),
    );
  }
}
