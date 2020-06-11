import 'dart:math';

import 'package:flutter/material.dart';

main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
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

class _SQHomePageState extends State<SQHomePage>
    with SingleTickerProviderStateMixin {
  // 创建AnimationController
  AnimationController _controller;
  Animation _animation;

  Animation _sizeAnim;
  Animation _colorAnim;
  Animation _opacityAnim;
  Animation _radiansAnim;


  @override
  void initState() {
    super.initState();
    // 1. 创建AnimationController
    _controller = AnimationController(
      vsync: this,
      duration: Duration(seconds: 2),
    );

    // 2. 设置Curve的值
    _animation = CurvedAnimation(parent: _controller, curve: Curves.linear);

    // 3. Tween
    // 3.1 创建size的tween
    _sizeAnim = Tween(begin: 10.0, end: 200.0).animate(_controller);
    // 3.2 创建color的tween
    _colorAnim = ColorTween(begin: Colors.orange, end: Colors.purple).animate(_controller);
    // 3.3 创建opacity的tween
    _opacityAnim = Tween(begin: 0.0, end: 1.0).animate(_controller);
    // 3.4 创建radians的tween
    _radiansAnim = Tween(begin: 0.0, end: 2 * pi).animate(_controller);

//    _controller.addListener(() {
//      setState(() {
//
//      });
//    });

    // 监听动画的状态改变
    _controller.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        _controller.reverse();
      } else if (status == AnimationStatus.dismissed) {
        _controller.forward();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    print("执行_SQHomePageState的build方法");
    /**
     * 1. 大小动画
     * 2. 颜色变化动画
     * 3. 透明度变化动画
     */
    return Scaffold(
      appBar: AppBar(
        title: Text("首页"),
      ),
      body: Center(
        child: AnimatedBuilder(
          animation: _controller,
          builder: (ctx, child) {
            return Opacity(
              opacity: _opacityAnim.value,
              child: Transform(
                transform: Matrix4.rotationZ(_radiansAnim.value),
                alignment: Alignment.center,
                child: Container(
                  width: _sizeAnim.value,
                  height: _sizeAnim.value,
                  color: _colorAnim.value,
                ),
              ),
            );
          },
        )
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.play_arrow),
        onPressed: () {
          if (_controller.isAnimating) {
            _controller.stop();
            print(_controller.status);
          } else if (_controller.status == AnimationStatus.forward) {
            _controller.forward();
          } else if (_controller.status == AnimationStatus.reverse) {
            _controller.reverse();
          } else {
            _controller.forward();
          }
        },
      ),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}

/**
 * 1.Animation: 抽象类
 *  * 监听动画值的改变
 *  * 监听动画状态的改变
 *  * value
 *  * status
 * 2.AnimationController继承自Animation
 *  * vsync: 同步信号 (this -> with SingleTickerProviderStateMixin)
 *  * forward(): 向前执行动画
 *  * reverse(): 反转执行动画
 * 3.CurvedAnimation:
 *  * 作用: 设置动画执行的速率(速度曲线)
 * 4.Tween: 设置动画执行的value范围
 *  * begin: 开始值
 *  * end: 结束值
 */
