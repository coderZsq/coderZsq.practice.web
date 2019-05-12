import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Image demo',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Image demo'),
        ),
        body: Center(
          child: buildExpandedImagesWithFlex(),
        ),
      ),
    );
  }

  Widget buildRow() =>
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Image.asset('images/avatar.jpg'),
          Image.asset('images/avatar.jpg'),
          Image.asset('images/avatar.jpg'),
        ],
      );

  Widget buildColumn() =>
      Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Image.asset('images/avatar.jpg'),
          Image.asset('images/avatar.jpg'),
          Image.asset('images/avatar.jpg'),
        ],
      );

  Widget buildExpandedImages() =>
      Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
            child: Image.asset('images/avatar_big.jpg'),
          ),
          Expanded(
            child: Image.asset('images/avatar_big.jpg'),
          ),
          Expanded(
            child: Image.asset('images/avatar_big.jpg'),
          ),
        ],
      );

  Widget buildExpandedImagesWithFlex() =>
      Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
            child: Image.asset('images/avatar_big.jpg'),
          ),
          Expanded(
            flex: 2,
            child: Image.asset('images/avatar_big.jpg'),
          ),
          Expanded(
            child: Image.asset('images/avatar_big.jpg'),
          ),
        ],
      );
}

