import 'package:favorcate/core/model/meal_model.dart';
import 'package:favorcate/core/services/http_request.dart';

class SQMealRequest {
  static Future<List<SQMealModel>> getMealData() async {
    // 1. 发送网络请求
    final url = "/meal";
    final result = await HttpRequest.request(url);

    // 2. json转model
    final mealArray = result["meal"];
    List<SQMealModel> meals = [];
    for (var json in mealArray) {
      meals.add(SQMealModel.fromJson(json));
    }
    return meals;
  }
}