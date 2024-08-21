import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../datas/dio_provider.dart';
import '../models/activity.dart';
import 'enum_async_activity_state.dart';

part 'enum_async_activity_provider.g.dart';

@riverpod
class EnumAsyncActivity extends _$EnumAsyncActivity {
  EnumAsyncActivity() {
    // state = EnumAsyncActivityState.initial();
    print('[EnumAsyncActivity] constructor called');
  }

  @override
  EnumAsyncActivityState build() {
    print('[EnumAsyncActivityProvider] initialized');
    ref.onDispose(() {
      print('[EnumAsyncActivityProvider] disposed');
    });
    print('hashCode: $hashCode');
    state = EnumAsyncActivityState.initial();
    // state = EnumAsyncActivityState(
    //     status: ActivityStatus.failure,
    //     activity: Activity.empty(),
    //     error: "Initial Failure");
    fetchActivity(activityTypes[0]);
    return EnumAsyncActivityState.initial();
  }

  Future<void> fetchActivity(String activityType) async {
    print('hashCode in fetchActivity: $hashCode');
    state = state.copyWith(
      status: ActivityStatus.loading,
    );

    final response = await getActivityData();
    final activity = Activity.fromJson(response);
    try {
      Future.delayed(Duration.zero, () {
        state = state.copyWith(
          status: ActivityStatus.success,
          activity: activity,
        );
      });
    } catch (e) {
      state =
          state.copyWith(status: ActivityStatus.failure, error: e.toString());
    }
  }

  Future<void> fetchData() async {
    state = state.copyWith(
      status: ActivityStatus.loading,
    );
    try {
      final fetchData = await getData();
      final currentActivity = state.activity;
      final updatedActivity = currentActivity.copyWith(
        data: [...currentActivity.data, ...fetchData],
      );
      state = state.copyWith(
        status: ActivityStatus.success,
        activity: updatedActivity,
      );
    } catch (e) {
      state =
          state.copyWith(status: ActivityStatus.failure, error: e.toString());
    }
  }
}
