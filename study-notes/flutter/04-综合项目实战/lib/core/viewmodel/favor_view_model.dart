import 'package:favorcate/core/model/meal_model.dart';
import 'package:favorcate/core/viewmodel/base_view_model.dart';
import 'package:flutter/material.dart';

import 'filter_view_model.dart';

class SQFavorViewModel extends BaseMealViewModel {
  void addMeal(SQMealModel meal) {
    originMeals.add(meal);
    notifyListeners();
  }

  void removeMeal(SQMealModel meal) {
    originMeals.remove(meal);
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
    return originMeals.contains(meal);
  }
}
