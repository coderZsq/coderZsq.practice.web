import 'package:favorcate/core/model/category_model.dart';
import 'package:favorcate/core/model/meal_model.dart';
import 'package:favorcate/core/viewmodel/meal_view_model.dart';
import 'package:favorcate/ui/widgets/meal_item.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:collection/collection.dart';

class SQMealContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final category =
        ModalRoute.of(context).settings.arguments as SQCategoryModel;
    return Selector<SQMealViewModel, List<SQMealModel>>(
//      selector: (ctx, mealVM) => mealVM.meals.where((meal) => meal.categories.contains(category.id)).toList(),
      selector: (ctx, mealVM) {
        return mealVM.meals.where((meal) {
          return meal.categories.contains(category.id);
        }).toList();
      },
      shouldRebuild: (prev, next) => !ListEquality().equals(prev, next),
      builder: (ctx, meals, child) {
        return ListView.builder(
            itemCount: meals.length,
            itemBuilder: (ctx, index) {
              return SQMealItem(meals[index]);
            });
      },
    );
  }
}

//class SQMealContent extends StatelessWidget {
//  @override
//  Widget build(BuildContext context) {
//    final category =
//        ModalRoute.of(context).settings.arguments as SQCategoryModel;
//    return Consumer<SQMealViewModel>(
//      builder: (ctx, mealVM, child) {
//        final meals = mealVM.meals
//            .where((meal) => meal.categories.contains(category.id))
//            .toList();
//        return ListView.builder(
//            itemCount: meals.length,
//            itemBuilder: (ctx, index) {
//              return ListTile(title: Text(meals[index].title));
//            });
//      },
//    );
//  }
//}
