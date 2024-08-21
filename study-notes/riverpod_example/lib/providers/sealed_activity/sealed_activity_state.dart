import '../models/activity.dart';

sealed class SealedActivityState {
  const SealedActivityState();
}

final class SealedActivityInitial extends SealedActivityState {
  const SealedActivityInitial();

  @override
  String toString() => 'SealedActivityInitial()';
}

final class SealedActivityLoading extends SealedActivityState {
  const SealedActivityLoading();

  @override
  String toString() => 'SealedActivityLoading()';
}

final class SealedActivitySuccess extends SealedActivityState {
  const SealedActivitySuccess({
    required this.activity,
  });

  final Activity activity;

  @override
  String toString() => 'SealedActivitySuccess(activity: $activity)';
}

final class SealedActivityFailure extends SealedActivityState {
  const SealedActivityFailure({
    required this.error,
  });

  final String error;

  @override
  String toString() => 'SealedActivityFailure(error: $error)';
}
