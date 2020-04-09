import 'package:favorcate/core/services/meal_request.dart';
import 'package:favorcate/core/viewmodel/base_view_model.dart';

class SQMealViewModel extends BaseMealViewModel {

  SQMealViewModel() {
    SQMealRequest.getMealData().then((res) {
      meals = res;
    });
  }
}