import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'package:riverpod_example/providers/sealed_activity/sealed_activity_state.dart';

import '../datas/dio_provider.dart';
import '../models/activity.dart';

part 'sealed_activity_provider.g.dart';

@riverpod
class SealedActivity extends _$SealedActivity {
  @override
  SealedActivityState build() {
    ref.onDispose(() {
      print('dispose');
    });
    print('hashCode: $hashCode');
    return const SealedActivityInitial();
  }

  Future<void> fetchActivity(String activityType) async {
    print('hashCode in fetchActivity: $hashCode');
    state = const SealedActivityLoading();

    final response = await getActivityData();
    final activity = Activity.fromJson(response);
    try {
      state = SealedActivitySuccess(activity: activity);
    } catch (e) {
      state = SealedActivityFailure(error: e.toString());
    }
  }
}
