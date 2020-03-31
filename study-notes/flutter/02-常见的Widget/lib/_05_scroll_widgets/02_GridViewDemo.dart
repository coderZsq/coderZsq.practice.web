import 'dart:math';

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
        appBar: AppBar(title: Text("列表测试")),
        body: Padding(
          padding: EdgeInsets.symmetric(horizontal: 0),
          child: GridView.builder(
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2, mainAxisSpacing: 8, crossAxisSpacing: 8),
              itemBuilder: (BuildContext ctx, int index) {
                return Container(
                  color: Color.fromARGB(255, Random().nextInt(256),
                      Random().nextInt(256), Random().nextInt(256)),
                );
              }),
        ));
  }
}

class GridViewDemo2 extends StatelessWidget {
  const GridViewDemo2({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GridView(
        gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
            maxCrossAxisExtent: 400,
            crossAxisSpacing: 8,
            mainAxisSpacing: 8,
            childAspectRatio: 1.8),
        children: List.generate(100, (index) {
          return Container(
            color: Color.fromARGB(255, Random().nextInt(256),
                Random().nextInt(256), Random().nextInt(256)),
          );
        }));
  }
}

class GridViewDemo1 extends StatelessWidget {
  const GridViewDemo1({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GridView(
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 3,
          childAspectRatio: .8,
          crossAxisSpacing: 8,
          mainAxisSpacing: 8),
      children: List.generate(100, (index) {
        return Container(
          color: Color.fromARGB(255, Random().nextInt(256),
              Random().nextInt(256), Random().nextInt(256)),
        );
      }),
    );
  }
}
