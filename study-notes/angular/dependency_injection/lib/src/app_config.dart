import 'package:angular/angular.dart';

const appTitleToken = OpaqueToken<String>('app.title');

const appTitle = 'Dependency Injection';

const appConfigMap = {
  'apiEndpoint': 'api.heroes.com',
  'title': 'Dependency Injection',
  // ...
};

const appConfigMapToken = OpaqueToken<Map>('app.config');

class AppConfig {
  String apiEndpoint;
  String title;
}

AppConfig appConfigFactory() => AppConfig()
  ..apiEndpoint = 'api.heroes.com'
  ..title = 'Dependency Injection';