import '../models/activity.dart';

sealed class SealedAsyncActivityState {
  const SealedAsyncActivityState();
}

final class SealedAsyncActivityLoading extends SealedAsyncActivityState {
  const SealedAsyncActivityLoading();

  @override
  String toString() => 'SealedActivityLoading()';
}

final class SealedAsyncActivitySuccess extends SealedAsyncActivityState {
  const SealedAsyncActivitySuccess({
    required this.activity,
  });

  final Activity activity;

  @override
  String toString() => 'SealedActivitySuccess(activity: $activity)';
}

final class SealedAsyncActivityFailure extends SealedAsyncActivityState {
  const SealedAsyncActivityFailure({
    required this.error,
  });

  final String error;

  @override
  String toString() => 'SealedActivityFailure(error: $error)';
}
