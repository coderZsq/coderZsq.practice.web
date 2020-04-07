import 'package:favorcate/core/model/meal_model.dart';
import 'package:flutter/material.dart';

class SQDetailContent extends StatelessWidget {
  final SQMealModel _meal;

  SQDetailContent(this._meal);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        children: <Widget>[
          buildBannerImage(),
          buildMakeMaterial(),
          buildMakeSteps()
        ],
      ),
    );
  }

  // 1. 横幅图片
  Widget buildBannerImage() {
    return Image.network(_meal.imageUrl);
  }

  // 2. 制作材料
  Widget buildMakeMaterial() {
    return Text("材料");
  }

  // 3. 制作步骤
  Widget buildMakeSteps() {
    return Text("步骤");
  }
}
