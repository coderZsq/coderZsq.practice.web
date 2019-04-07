import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart' show debugPaintSizeEnabled;
import 'src/layout7.dart';

void main() {
  debugPaintSizeEnabled = true;
  runApp(MyApp());
}

layout() {
  Text('Hello, World');
  Image.asset(
      'images/lake.jpg',
      fit: BoxFit.cover
  );
  Icon(
    Icons.star,
    color: Colors.red[500],
  );
  Center(
    child: Text('Hello World'),
  );
}
