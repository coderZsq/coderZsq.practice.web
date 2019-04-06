import 'package:angular/angular.dart';
import 'hero.dart';
//import 'mock_heroes.dart';
import 'hero_service.dart';

@Component(
  selector: 'hero-list',
  template: '''
    <div *ngFor="let hero of heroes">
      {{hero.id}} - {{hero.name}}
    </div>''',
  directives: [coreDirectives],
)
class HeroListComponent {
//  final List<Hero> heroes = mockHeroes;
  final List<Hero> heroes;

  HeroListComponent(HeroService heroService) : heroes = heroService.getAll();
}
