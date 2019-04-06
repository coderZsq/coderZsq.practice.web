import 'package:angular/angular.dart';

import 'car/car.dart';
import 'heroes/hero.dart';
import 'heroes/hero_service.dart';
import 'heroes/hero_service_provider.dart';
import 'logger_service.dart';

@Component(
  selector: 'my-injectors',
  template: '''
      <h2>Other Injections</h2>
      <div id="car">{{car.drive()}}</div>
      <div id="hero">{{hero.name}}</div>
      <div id="rodent">{{rodent}}</div>''',
  providers: [
    ClassProvider(Car),
    ClassProvider(Engine),
    ClassProvider(Tires),
    heroServiceProvider,
    ClassProvider(Logger),
  ],
)
class InjectorComponent implements OnInit {
  final Injector _injector;
  Car car;
  HeroService heroService;
  Hero hero;

  InjectorComponent(this._injector);

  @override
  void ngOnInit() {
    car = _injector.get(Car);
    heroService = _injector.get(HeroService);
    hero = heroService.getAll()[0];
  }

  String get rodent =>
      _injector.get(ROUS, "R.O.U.S.'s? I don't think they exist!");
}

/// R.O.U.S. - Rodents Of Unusual Size
/// https://www.youtube.com/watch?v=BOv5ZjAOpC8
class ROUS {}