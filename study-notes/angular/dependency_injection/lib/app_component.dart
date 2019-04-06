import 'package:angular/angular.dart';

import 'src/car/car_component.dart';
import 'src/heroes/heroes_component.dart';


@Component(
  selector: 'my-app',
  template: '''
      <my-car></my-car>
      <my-heroes></my-heroes>
  ''',
  directives: [
    CarComponent,
    HeroesComponent
  ]
)
class AppComponent {
  // Nothing here yet. All logic is in TodoListComponent.
}
