import 'package:angular/angular.dart';
import 'hero.dart';
import 'hero_component.dart';
import 'hero_service.dart';

@Component(
  selector: 'my-heroes',
  templateUrl: 'hero_list_component.html',
  styleUrls: ['hero_list_component.css'],
  directives: [coreDirectives, HeroComponent],
  providers: [ClassProvider(HeroService)]
)

class HeroListComponent implements OnInit {
  final title = 'Tour of Heroes';
  final HeroService _heroService;
  List<Hero> heroes;
  Hero selected;
  HeroListComponent(this._heroService);
  Future<void> _getHeroes() async {
    heroes = await _heroService.getAllSlowly();
  }
  void ngOnInit() => _getHeroes();
  void onSelect(Hero hero) => selected = hero;
}
