import 'hero.dart';
import 'mock_heroes.dart';

class HeroService {
  Future<List<Hero>> getAll() async => mockHeroes;
  Future<List<Hero>> getAllSlowly() {
    return Future.delayed(Duration(seconds: 2), getAll);
  }
}