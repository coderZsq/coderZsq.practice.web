import 'package:favorcate/core/model/meal_model.dart';
import 'package:favorcate/core/services/meal_request.dart';
import 'package:flutter/material.dart';

class SQMealViewModel extends ChangeNotifier {
  List<SQMealModel> _meals = [];

  List<SQMealModel> get meals {
    return _meals;
  }

  SQMealViewModel() {
    SQMealRequest.getMealData().then((res) {
      _meals = res;
      notifyListeners();
    });
  }
}