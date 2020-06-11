import 'package:favorcate/core/model/meal_model.dart';
import 'package:favorcate/ui/pages/detail/detail_content.dart';
import 'package:favorcate/ui/pages/detail/detail_floating_button.dart';
import 'package:flutter/material.dart';

class SQDetailScreen extends StatelessWidget {
  static const String routeName = "/detail";

  @override
  Widget build(BuildContext context) {
    final meal = ModalRoute.of(context).settings.arguments as SQMealModel;

    return Scaffold(
      appBar: AppBar(
        title: Text(meal.title),
      ),
      body: SQDetailContent(meal),
      floatingActionButton: SQDetailFloatingButton(meal),
    );
  }
}
