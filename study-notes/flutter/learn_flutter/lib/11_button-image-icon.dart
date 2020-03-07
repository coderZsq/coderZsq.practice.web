import 'package:flutter/material.dart';

main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SQHomePage(),
    );
  }
}

class SQHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("基础Widget")),
      body: SQHomeContent(),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () => print("FloatingActionButton Click"),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}

class SQHomeContent extends StatefulWidget {
  @override
  _SQHomeContentState createState() => _SQHomeContentState();
}

class _SQHomeContentState extends State<SQHomeContent> {
  @override
  Widget build(BuildContext context) {
    return IconExtensionDemo();
  }
}

class IconExtensionDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Icon字体图标和图片图标
    // 1. 字体图标矢量图(放大的时候不会失真)
    // 2. 字体图标可以设置颜色
    // 3. 图标很多时, 占据空间更小
//    return Icon(Icons.pets, size: 300, color: Colors.orange,);
//    return Icon(IconData(0xe91d, fontFamily: "MaterialIcons"),u
//        size: 300, color: Colors.orange);
    // 1. 0xe91d -> unicode编码
    // 2. 设置对应的字体
    return Text("\ue91d",
        style: TextStyle(
            fontSize: 100, color: Colors.orange, fontFamily: "MaterialIcons"));
  }
}

class ImageExtensionDemo extends StatelessWidget {
  const ImageExtensionDemo({
    Key key,
  }) : super(key: key);
  final imageURL =
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583340863953&di=46c8127502fa80464eb9b65396f61f97&imgtype=0&src=http%3A%2F%2Fwww.mux5.com%2Fpicture%2F3881ad96ba228dcd6c05acf0b2af5ef9.jpg";

  @override
  Widget build(BuildContext context) {
    // 1. 占位图的问题: FadeInImage
    // 2. 图片缓存: 1000张 100m
    return FadeInImage(
      fadeOutDuration: Duration(milliseconds: 1),
      fadeInDuration: Duration(milliseconds: 1),
      placeholder: AssetImage("assets/images/juren.jpeg"),
      image: NetworkImage(imageURL),
    );
  }
}

class ButtonExtensionDemo extends StatelessWidget {
  const ButtonExtensionDemo({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // 1. 默认情况下Button上下有一定的间距
    // 2. Button变小: ButtonTheme
    // 3. 去除Button的内边距
    return Column(
      children: <Widget>[
        FlatButton(
          color: Colors.red,
          materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
          child: Text("Flat Button1"),
          textColor: Colors.white,
          onPressed: () {},
        ),
        ButtonTheme(
          minWidth: 30,
          height: 30,
          child: FlatButton(
            color: Colors.red,
            materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
//            child: Text("Flat Button2"),
            textColor: Colors.white,
            onPressed: () {},
          ),
        ),
        FlatButton(
          padding: EdgeInsets.all(0),
          color: Colors.red,
          materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
          child: Text("Flat Button3"),
          textColor: Colors.white,
          onPressed: () {},
        )
      ],
    );
  }
}
