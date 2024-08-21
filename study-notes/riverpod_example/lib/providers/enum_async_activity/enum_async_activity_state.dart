import 'package:freezed_annotation/freezed_annotation.dart';

import '../models/activity.dart';

part 'enum_async_activity_state.freezed.dart';

enum ActivityStatus {
  loading,
  success,
  failure,
}

@freezed
class EnumAsyncActivityState with _$EnumAsyncActivityState {
  const factory EnumAsyncActivityState({
    required ActivityStatus status,
    required Activity activity,
    required String error,
  }) = _EnumAsyncActivityState;

  factory EnumAsyncActivityState.initial() {
    return EnumAsyncActivityState(
      status: ActivityStatus.loading,
      activity: Activity.empty(),
      error: '',
    );
  }
}
