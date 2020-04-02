import 'package:favorcate/ui/pages/home/home_content.dart';
import 'package:flutter/material.dart';

class SQHomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("美食广场"),
      ),
      body: SQHomeContent()
    );
  }
}
