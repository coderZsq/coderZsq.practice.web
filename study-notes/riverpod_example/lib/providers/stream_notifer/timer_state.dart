sealed class TimerState {
  final int duration;
  const TimerState(
    this.duration,
  );
}

final class TimerInitial extends TimerState {
  const TimerInitial(
    super.duration,
  );

  @override
  String toString() => 'TimerInitial { duration: $duration }';
}

final class TimerRunning extends TimerState {
  const TimerRunning(
    super.duration,
  );

  @override
  String toString() => 'TimerRunning { duration: $duration }';
}

final class TimerPaused extends TimerState {
  const TimerPaused(
    super.duration,
  );

  @override
  String toString() => 'TimerPaused { duration: $duration }';
}

final class TimeFinished extends TimerState {
  const TimeFinished() : super(0);

  @override
  String toString() => 'TimeFinished {}';
}
