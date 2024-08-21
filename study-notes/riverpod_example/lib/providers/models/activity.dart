import 'package:freezed_annotation/freezed_annotation.dart';

part 'activity.freezed.dart';
part 'activity.g.dart';

@freezed
class Activity with _$Activity {
  const factory Activity({
    required String activity,
    required double accessibility,
    required String type,
    required double participants,
    required double price,
    required String key,
    required List<String> data,
  }) = _Activity;

  factory Activity.fromJson(Map<String, dynamic> json) =>
      _$ActivityFromJson(json);

  factory Activity.empty() => const Activity(
      activity: '',
      accessibility: 0.0,
      type: '',
      participants: 0.0,
      price: 0.0,
      key: '',
      data: []);
}

final activityTypes = [
  'education',
  'recreational',
  'social',
  'diy',
  'charity',
  'cooking',
  'relaxation',
  'music',
  'busywork',
];
