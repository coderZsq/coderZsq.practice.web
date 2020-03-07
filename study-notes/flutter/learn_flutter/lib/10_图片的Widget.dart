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
  final imageURL =
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583340863953&di=46c8127502fa80464eb9b65396f61f97&imgtype=0&src=http%3A%2F%2Fwww.mux5.com%2Fpicture%2F3881ad96ba228dcd6c05acf0b2af5ef9.jpg";

  @override
  Widget build(BuildContext context) {
    return ImageDemo02();
  }
}

class ImageDemo02 extends StatelessWidget {
  const ImageDemo02({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Image.asset("assets/images/juren.jpeg");
//    return Image(
//      // 1. 在Flutter项目创建一个文件夹, 存储图片
//      // 2. 在pubspec.yaml进行配置
//      // 3. 使用图片
//      image: AssetImage("assets/images/juren.jpeg"),
//    );
  }
}

class ImageDemo01 extends StatelessWidget {
  const ImageDemo01({
    Key key,
    @required this.imageURL,
  }) : super(key: key);

  final String imageURL;

  @override
  Widget build(BuildContext context) {
    // Image.network(imageURL)
    return Image(
      color: Colors.green,
      colorBlendMode: BlendMode.colorDodge,
      image: NetworkImage(imageURL),
      width: 200,
      height: 200,
      fit: BoxFit.contain,
      repeat: ImageRepeat.repeatY,
      // alignment: Alignment.bottomCenter,
      // 范围 -1, 1
      alignment: Alignment(0, 0),
    );
  }
}
