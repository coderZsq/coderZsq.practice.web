import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';

class SQLocalizations {
  final Locale locale;

  SQLocalizations(this.locale);

  static SQLocalizations of(BuildContext context) {
    return Localizations.of(context, SQLocalizations);
  }

  static Map<String, Map<String, String>> _localizeValues = {};

  Future loadJson() async {
    // 1. 加载json文件
    final jsonString = await rootBundle.loadString("assets/json/i18n.json");

    // 2. 对json进行解析
    Map<String, dynamic> map = json.decode(jsonString);
    _localizeValues = map.map((key, value) {
      return MapEntry(key, value.cast < String, String>());
    });
  }

  String get title {
    return _localizeValues[locale.languageCode]["title"];
  }

  String get hello {
    return _localizeValues[locale.languageCode]["hello"];
  }

  String get pickTime {
    return _localizeValues[locale.languageCode]["pickTime"];
  }
}
