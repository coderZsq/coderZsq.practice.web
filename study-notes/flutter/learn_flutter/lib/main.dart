import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'package:learn_flutter/service/http_request.dart';

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
  @override
  void initState() {
    super.initState();

    // 发送网络请求
    // 1. 创建Dio对象
//    final dio = Dio();

    // 2. 发送网络请求
//    dio.get("https://httpbin.org/get").then((res) {
//      print(res);
//    });
//
//    dio.post("https://httpbin.org/post").then((res) {
//      print(res);
//    });

    HttpRequest.request("/get", params: {"name" : "coderZsq"}).then((res) {
      print(res);
    }).catchError((err) {

    });
  }
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
