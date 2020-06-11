import 'dart:convert';

import 'package:favorcate/core/model/category_model.dart';
import 'package:flutter/services.dart';

class SQJsonParse {
  static Future<List<SQCategoryModel>> getCategoryData() async {
    // 1. 加载json文件
    final jsonString = await rootBundle.loadString("assets/json/category.json");

    // 2. 将jsonString转成Map/List
    final result = json.decode(jsonString);

    // 3. 将Map中的内容转成一个个对象
    // https://javiercbk.github.io/json_to_dart/
    // https://app.quicktype.io
    final resultList = result["category"];
    List<SQCategoryModel> categories = [];
    for (var json in resultList) {
      categories.add(SQCategoryModel.fromJson(json));
    }

    return categories;
  }
}