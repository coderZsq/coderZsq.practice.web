import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutterapp/_03_router_manager/main.dart';

import '../detail.dart';
import '../about.dart';
import '../unknown.dart';

class SQRouter {
  static final Map<String, WidgetBuilder> routes = {
    SQHomePage.routeName: (ctx) => SQHomePage(),
    SQAboutPage.routeName: (ctx) => SQAboutPage()
  };

  static final String initialRoute = SQHomePage.routeName;

  static final RouteFactory generateRoute = (settings) {
      if (settings.name == SQDetailPage.routeName) {
        return MaterialPageRoute(
            builder: (ctx) {
              return SQDetailPage(settings.arguments);
            }
        );
      }
      return null;
  };

  static final RouteFactory unknownRoute = (settings) {
    return MaterialPageRoute(
        builder: (ctx) {
          return SQUnknownPage();
        }
    );
  };
}