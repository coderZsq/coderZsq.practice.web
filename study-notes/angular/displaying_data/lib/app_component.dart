import 'package:angular/angular.dart';
import 'src/hero.dart';


@Component(
  selector: 'my-app',
  template: '''
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heroes: </p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{hero.name}}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  ''',
  directives: [coreDirectives],
)

class AppComponent {
  final title = 'Tour of Heroes';
  List<Hero> heroes = [
    Hero(1, 'Windstrom'),
    Hero(13, 'Bombasto'),
    Hero(15, 'Magneta'),
    Hero(20, 'Tornado'),
  ];
  Hero get myHero => heroes.first;
}
