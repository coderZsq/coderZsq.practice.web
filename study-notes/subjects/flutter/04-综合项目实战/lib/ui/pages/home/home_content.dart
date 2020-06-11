import 'package:favorcate/core/model/category_model.dart';
import 'package:favorcate/core/services/json_parse.dart';
import 'package:flutter/material.dart';
import 'package:favorcate/core/extension/int_extension.dart';

import 'home_category_item.dart';

class SQHomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<SQCategoryModel>>(
      future: SQJsonParse.getCategoryData(),
      builder: (ctx, snapshot) {
        if (!snapshot.hasData) return Center(child: CircularProgressIndicator());
        if (snapshot.error != null) return Center(child: Text("请求失败"));
        final categories = snapshot.data;
        return GridView.builder(
            padding: EdgeInsets.all(20.px),
            itemCount: categories.length,
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                crossAxisSpacing: 20.px,
                mainAxisSpacing: 20.px,
                childAspectRatio: 1.5),
            itemBuilder: (ctx, index) {
              return SQHomeCategoryItem(categories[index]);
            });
      },
    );
  }
}
