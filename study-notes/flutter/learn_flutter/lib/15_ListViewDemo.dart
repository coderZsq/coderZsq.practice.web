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
      body: Container(
        height: 300,
        child: ListView.separated(
            itemCount: 100,
            itemBuilder: (BuildContext ctx, int index) {
              return Text("Hello World: $index", style: TextStyle(fontSize: 20));
            },
            separatorBuilder: (BuildContext ctx, int index) {
              return Divider(
                color: Colors.red,
                height: 30,
                indent: 30,
                endIndent: 30,
                thickness: 10,
              );
            }),
      ),
    );
  }
}

class LisetViewDemo2 extends StatelessWidget {
  const LisetViewDemo2({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        itemCount: 100,
        itemExtent: 60,
        itemBuilder: (BuildContext ctx, int index) {
          return Text("Hello World: $index", style: TextStyle(fontSize: 20));
        });
  }
}

class ListViewDemo1 extends StatelessWidget {
  const ListViewDemo1({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView(
//        scrollDirection: Axis.horizontal,
//        reverse: true,
//        itemExtent: 100,
      children: List.generate(100, (index) {
        return ListTile(
          leading: Icon(Icons.people),
          trailing: Icon(Icons.delete),
          title: Text("联系人${index + 1}"),
          subtitle: Text("联系人电话号码:18866665555"),
        );
      }),
    );
  }
}
