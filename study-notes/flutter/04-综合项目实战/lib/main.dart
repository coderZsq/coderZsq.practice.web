import 'package:favorcate/core/router/router.dart';
import 'package:favorcate/ui/shared/app_theme.dart';
import 'package:favorcate/ui/shared/size_fit.dart';
import 'package:flutter/material.dart';

main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // 对 SQSizeFit进行初始化
    SQSizeFit.initialize();

    return MaterialApp(
      title: '美食广场',

      // 主题
      theme: SQAppTheme.norTheme,

      // 路由
      initialRoute: SQRouter.initialRoute,
      routes: SQRouter.routes,
      onGenerateRoute: SQRouter.generateRoute,
      onUnknownRoute: SQRouter.unknownRoute,
    );
  }
}

