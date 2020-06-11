import 'package:flutter/material.dart';

import 'package:learn_flutter/douban/pages/home/home_content.dart';

class SQHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("首页"),
      ),
      body: SQHomeContent(),
    );
  }
}
