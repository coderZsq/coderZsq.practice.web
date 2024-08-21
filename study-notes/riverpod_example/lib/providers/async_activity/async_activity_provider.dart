import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../datas/dio_provider.dart';
import '../models/activity.dart';

part 'async_activity_provider.g.dart';

@riverpod
class AsyncActivity extends _$AsyncActivity {
  int _errorCounter = 0;

  @override
  FutureOr<Activity> build() async {
    ref.onDispose(() {
      print('[asyncActivityProvider] disposed');
    });
    return await getActivity(activityTypes[0]);
  }

  Future<Activity> getActivity(String activityType) async {
    final response = await getActivityData();
    return Activity.fromJson(response);
  }

  Future<void> fetchActivity(String activityType) async {
    state = const AsyncLoading();

    state = await AsyncValue.guard(() async {
      if (_errorCounter++ % 2 != 1) {
        await Future.delayed(const Duration(seconds: 1));
        throw 'Fail to fetch activity';
      }
      return await getActivity(activityType);
    });
  }
}
