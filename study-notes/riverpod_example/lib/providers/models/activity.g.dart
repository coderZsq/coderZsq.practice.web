// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'activity.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$ActivityImpl _$$ActivityImplFromJson(Map<String, dynamic> json) =>
    _$ActivityImpl(
      activity: json['activity'] as String,
      accessibility: (json['accessibility'] as num).toDouble(),
      type: json['type'] as String,
      participants: (json['participants'] as num).toDouble(),
      price: (json['price'] as num).toDouble(),
      key: json['key'] as String,
      data: (json['data'] as List<dynamic>).map((e) => e as String).toList(),
    );

Map<String, dynamic> _$$ActivityImplToJson(_$ActivityImpl instance) =>
    <String, dynamic>{
      'activity': instance.activity,
      'accessibility': instance.accessibility,
      'type': instance.type,
      'participants': instance.participants,
      'price': instance.price,
      'key': instance.key,
      'data': instance.data,
    };
