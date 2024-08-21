import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'package:riverpod_example/providers/sealed_async_activity/sealed_async_activity_state.dart';

import '../datas/dio_provider.dart';
import '../models/activity.dart';

part 'sealed_async_activity_provider.g.dart';

@riverpod
class SealedAsyncActivity extends _$SealedAsyncActivity {
  SealedAsyncActivity() {
    print('[SealedAsyncActivity] constructor called');
  }

  @override
  SealedAsyncActivityState build() {
    ref.onDispose(() {
      print('dispose');
    });
    print('hashCode: $hashCode');
    fetchActivity(activityTypes[0]);
    return const SealedAsyncActivityLoading();
  }

  Future<void> fetchActivity(String activityType) async {
    print('hashCode in fetchActivity: $hashCode');
    state = const SealedAsyncActivityLoading();

    final response = await getActivityData();
    final activity = Activity.fromJson(response);
    try {
      state = SealedAsyncActivitySuccess(activity: activity);
    } catch (e) {
      state = SealedAsyncActivityFailure(error: e.toString());
    }
  }
}
