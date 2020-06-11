import 'package:learn_flutter/douban/model/home_model.dart';

import 'config.dart';
import 'http_request.dart';

class HomeRequest {
  static Future<List<MovieItem>> requestMovieList(int start) async {
    // 1. 构建URL
    final movieURL = "/movie/top250?start=$start&count=${HomeConfig.movieCount}";

    // 2. 发送网络请求获取结果
    final result = await HttpRequest.request(movieURL);
    final subjects = result["subjects"];

    // 3. 将Map转成Model
    List<MovieItem> movies = [];
    for (var sub in subjects) {
      movies.add(MovieItem.fromMap(sub));
    }
    return movies;
  }
}