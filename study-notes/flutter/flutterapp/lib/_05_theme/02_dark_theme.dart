import 'package:flutter/material.dart';
import 'package:flutterapp/_05_theme/shared/app_theme.dart';

main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      title: "Flutter Demo",
      theme: SQAppTheme.norTheme,
      darkTheme: SQAppTheme.darkTheme,
      home: SQHomePage(),
    );
  }
}

class SQHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("首页"),
      ),
      body: Center(
        child: Text("Hello World")
      ),
    );
  }
}
