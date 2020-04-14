import 'package:flutter/cupertino.dart';

import 'localizations.dart';

class SQLocalizationDelegate extends LocalizationsDelegate<SQLocalizations> {
  static SQLocalizationDelegate delegate = SQLocalizationDelegate();

  @override
  bool isSupported(Locale locale) {
    return ["zh", "en"].contains(locale.languageCode);
  }

  @override
  bool shouldReload(LocalizationsDelegate<SQLocalizations> old) {
    return false;
  }

  @override
  Future<SQLocalizations> load(Locale locale) async {
    final localizations = SQLocalizations(locale);
    await localizations.loadJson();
    return localizations;
  }
}