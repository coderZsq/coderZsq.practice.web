import 'package:favorcate/core/model/meal_model.dart';
import 'package:flutter/material.dart';

import 'filter_view_model.dart';

class BaseMealViewModel extends ChangeNotifier {

  List<SQMealModel> _meals = [];

  SQFilterViewModel _filterVM;

  void updateFilter(SQFilterViewModel filterVM) {
    _filterVM = filterVM;
  }

  List<SQMealModel> get meals {
    return _meals.where((meal) {
      // 过滤 filterVM
      if (_filterVM.isGlutenFree && !meal.isGlutenFree) return false;
      if (_filterVM.isLactoseFree && !meal.isLactoseFree) return false;
      if (_filterVM.isVegetarian && !meal.isVegetarian) return false;
      if (_filterVM.isVegan && !meal.isVegan) return false;
      return true;
    }).toList();
  }

  List<SQMealModel> get originMeals {
    return _meals;
  }

  set meals(List<SQMealModel> value) {
    _meals = value;
    notifyListeners();
  }
}