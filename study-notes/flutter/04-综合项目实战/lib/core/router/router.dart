import 'package:favorcate/ui/pages/main/main.dart';
import 'package:flutter/material.dart';

class SQRouter {
  static final String initialRoute = SQMainScreen.routeName;

  static final Map<String, WidgetBuilder> routes = {
    SQMainScreen.routeName: (ctx) => SQMainScreen()
  };

  // 自己扩展
  static final RouteFactory generateRoute = (settings) {
    return null;
  };

  static final RouteFactory unknownRoute = (settings) {
    return null;
  };
}