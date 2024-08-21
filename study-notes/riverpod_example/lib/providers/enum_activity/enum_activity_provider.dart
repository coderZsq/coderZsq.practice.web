import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../datas/dio_provider.dart';
import '../models/activity.dart';
import 'enum_activity_state.dart';

part 'enum_activity_provider.g.dart';

@riverpod
class ListData extends _$ListData {
  @override
  List<String> build() {
    return [];
  }

  void append(List<String> data) {
    state = [...state, ...data];
  }
}

@riverpod
class EnumActivity extends _$EnumActivity {
  @override
  EnumActivityState build() {
    ref.onDispose(() {
      print('dispose');
    });
    print('hashCode: $hashCode');
    return EnumActivityState.initial();
  }

  Future<void> fetchActivity(String activityType) async {
    print('hashCode in fetchActivity: $hashCode');
    state = state.copyWith(
      status: ActivityStatus.loading,
    );

    final response = await getActivityData();
    final activity = Activity.fromJson(response);

    ref.read(listDataProvider.notifier).append(activity.data);

    try {
      state = state.copyWith(
        status: ActivityStatus.success,
        activity: activity,
      );
    } catch (e) {
      state =
          state.copyWith(status: ActivityStatus.failure, error: e.toString());
    }
  }

  Future<void> fetchData() async {
    final fetchData = await getData();
    ref.read(listDataProvider.notifier).append(fetchData);

    // state = state.copyWith(
    //   status: ActivityStatus.loading,
    // );
    // try {
    //   final fetchData = await getData();
    //   final currentActivity = state.activity;
    //   final updatedActivity = currentActivity.copyWith(
    //     data: [...currentActivity.data, ...fetchData],
    //   );
    //   state = state.copyWith(
    //     status: ActivityStatus.success,
    //     activity: updatedActivity,
    //   );
    // } catch (e) {
    //   state =
    //       state.copyWith(status: ActivityStatus.failure, error: e.toString());
    // }
  }
}
