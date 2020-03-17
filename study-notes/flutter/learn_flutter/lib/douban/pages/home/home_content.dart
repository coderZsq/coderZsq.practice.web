import 'package:flutter/material.dart';

class SQHomeContent extends StatefulWidget {
  @override
  _SQHomeContentState createState() => _SQHomeContentState();
}

class _SQHomeContentState extends State<SQHomeContent> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text("首页内容", style: TextStyle(fontSize: 30, color: Colors.green)),
    );
  }
}
