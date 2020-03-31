import 'package:flutter/material.dart';
import './viewmodel/counter_view_model.dart';
import './viewmodel/initialize_providers.dart';
import './viewmodel/user_view_model.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(MultiProvider(
    providers: providers,
    child: MyApp(),
  ));

//  runApp(
//      // 2. 在应用程序的顶层ChangeNotifierProvider
//      ChangeNotifierProvider(
//    create: (ctx) => SQCounterViewModel(),
//    child: ChangeNotifierProvider(
//      create: (ctx) => SQUserViewModel(UserInfo("coderZsq", 18, "url")),
//    ),
//  ));
}

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
      appBar: AppBar(
        title: Text("列表测试"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SQShowData01(),
            SQShowData02(),
            SQShowData03(),
          ],
        ),
      ),
      floatingActionButton: Selector<SQCounterViewModel, SQCounterViewModel>(
        selector: (ctx, counterVM) => counterVM,
        shouldRebuild: (prev, next) => false,
        builder: (ctx, counterVM, child) {
          print("floatingActionButton builder方法被执行");
          return FloatingActionButton(
            child: child,
            onPressed: () {
              counterVM.counter += 1;
            },
          );
        },
        child: Icon(Icons.add),
      ),
    );
  }
}

class SQShowData01 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // 3. 在其他位置使用共享数据
    int counter = Provider.of<SQCounterViewModel>(context).counter;
    print("data01的build方法");
    return Container(
      color: Colors.blue,
      child: Text("当前计数: $counter", style: TextStyle(fontSize: 30)),
    );
  }
}

class SQShowData02 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    print("data02的build方法");
    return Container(
      color: Colors.red,
      child: Consumer<SQCounterViewModel>(
        builder: (ctx, counterVM, child) {
          print("data02 Consumer builder方法被执行");
          return Text("当前计数: ${counterVM.counter}",
              style: TextStyle(fontSize: 30));
        },
      ),
    );
  }
}

class SQShowData03 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Provider.of Consumer Selector Consumer2
    return Consumer2<SQUserViewModel, SQCounterViewModel>(
      builder: (ctx, userVM, counterVM, child) {
        return Text(
          "nickname: ${userVM.user.nickname} counter: ${counterVM.counter}",
          style: TextStyle(fontSize: 20),
        );
      },
    );
  }
}
