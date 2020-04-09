import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutterapp/generated/l10n.dart';
import 'package:flutterapp/i18n/localizations.dart';
import 'package:flutterapp/i18n/localizations_delegate.dart';

main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Flutter Demo",
//      supportedLocales: [
//        Locale("zh"),
//        Locale("en"),
//      ],
      supportedLocales: S.delegate.supportedLocales,
      localizationsDelegates: [
        GlobalMaterialLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        SQLocalizationDelegate.delegate,
        S.delegate,
      ],
      home: SQHomePage(),
    );
  }
}

class SQHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
//        title: Text(SQLocalizations.of(context).title),
        title: Text(S.of(context).title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
//              SQLocalizations.of(context).hello,
              S.of(context).hello,
              style: TextStyle(fontSize: 20),
            ),
            RaisedButton(
              child: Text(
//                SQLocalizations.of(context).pickTime,
                S.of(context).message,
                style: Theme.of(context).textTheme.body1,
              ),
              onPressed: () {
                showDatePicker(
                    context: context,
                    initialDate: DateTime.now(),
                    firstDate: DateTime(2000),
                    lastDate: DateTime(3000));
              },
            )
          ],
        ),
      ),
    );
  }
}
