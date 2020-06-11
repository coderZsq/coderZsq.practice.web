import 'package:favorcate/ui/pages/filter/filter_content.dart';
import 'package:flutter/material.dart';

class SQFilterScreen extends StatelessWidget {
  static const String routeName = "/filter";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("美食过滤"),
      ),
      body: SQFilterContent(),
    );
  }
}
