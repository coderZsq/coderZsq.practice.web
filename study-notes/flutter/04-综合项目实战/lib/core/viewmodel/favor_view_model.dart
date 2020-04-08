import 'package:favorcate/core/model/meal_model.dart';
import 'package:flutter/material.dart';

class SQFavorViewModel extends ChangeNotifier {
  List<SQMealModel> _favorMeals = [];

  List<SQMealModel> get favorMeals {
    return _favorMeals;
  }

  void addMeal(SQMealModel meal) {
    _favorMeals.add(meal);
    notifyListeners();
  }

  void removeMeal(SQMealModel meal) {
    _favorMeals.remove(meal);
    notifyListeners();
  }

  void handleMeal(SQMealModel meal) {
    if (isFavor(meal)) {
      removeMeal(meal);
    } else {
      addMeal(meal);
    }
  }

  bool isFavor(SQMealModel meal) {
    return _favorMeals.contains(meal);
  }
}
