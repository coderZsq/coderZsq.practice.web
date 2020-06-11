import 'package:favorcate/ui/pages/detail/detail.dart';
import 'package:favorcate/ui/pages/filter/filter.dart';
import 'package:favorcate/ui/pages/main/main.dart';
import 'package:favorcate/ui/pages/meal/meal.dart';
import 'package:flutter/material.dart';

class SQRouter {
  static final String initialRoute = SQMainScreen.routeName;

  static final Map<String, WidgetBuilder> routes = {
    SQMainScreen.routeName: (ctx) => SQMainScreen(),
    SQMealScreen.routeName: (ctx) => SQMealScreen(),
    SQDetailScreen.routeName: (ctx) => SQDetailScreen()
  };

  // 自己扩展
  static final RouteFactory generateRoute = (settings) {
    if (settings.name == SQFilterScreen.routeName) {
      return MaterialPageRoute(
        builder: (ctx) {
          return SQFilterScreen();
        },
        fullscreenDialog: true
      );
    }
    return null;
  };

  static final RouteFactory unknownRoute = (settings) {
    return null;
  };
}