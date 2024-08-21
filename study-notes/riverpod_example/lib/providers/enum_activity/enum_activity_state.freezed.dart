// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'enum_activity_state.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#adding-getters-and-methods-to-our-models');

/// @nodoc
mixin _$EnumActivityState {
  ActivityStatus get status => throw _privateConstructorUsedError;
  Activity get activity => throw _privateConstructorUsedError;
  String get error => throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $EnumActivityStateCopyWith<EnumActivityState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $EnumActivityStateCopyWith<$Res> {
  factory $EnumActivityStateCopyWith(
          EnumActivityState value, $Res Function(EnumActivityState) then) =
      _$EnumActivityStateCopyWithImpl<$Res, EnumActivityState>;
  @useResult
  $Res call({ActivityStatus status, Activity activity, String error});

  $ActivityCopyWith<$Res> get activity;
}

/// @nodoc
class _$EnumActivityStateCopyWithImpl<$Res, $Val extends EnumActivityState>
    implements $EnumActivityStateCopyWith<$Res> {
  _$EnumActivityStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? status = null,
    Object? activity = null,
    Object? error = null,
  }) {
    return _then(_value.copyWith(
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as ActivityStatus,
      activity: null == activity
          ? _value.activity
          : activity // ignore: cast_nullable_to_non_nullable
              as Activity,
      error: null == error
          ? _value.error
          : error // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $ActivityCopyWith<$Res> get activity {
    return $ActivityCopyWith<$Res>(_value.activity, (value) {
      return _then(_value.copyWith(activity: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$EnumActivityStateImplCopyWith<$Res>
    implements $EnumActivityStateCopyWith<$Res> {
  factory _$$EnumActivityStateImplCopyWith(_$EnumActivityStateImpl value,
          $Res Function(_$EnumActivityStateImpl) then) =
      __$$EnumActivityStateImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({ActivityStatus status, Activity activity, String error});

  @override
  $ActivityCopyWith<$Res> get activity;
}

/// @nodoc
class __$$EnumActivityStateImplCopyWithImpl<$Res>
    extends _$EnumActivityStateCopyWithImpl<$Res, _$EnumActivityStateImpl>
    implements _$$EnumActivityStateImplCopyWith<$Res> {
  __$$EnumActivityStateImplCopyWithImpl(_$EnumActivityStateImpl _value,
      $Res Function(_$EnumActivityStateImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? status = null,
    Object? activity = null,
    Object? error = null,
  }) {
    return _then(_$EnumActivityStateImpl(
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as ActivityStatus,
      activity: null == activity
          ? _value.activity
          : activity // ignore: cast_nullable_to_non_nullable
              as Activity,
      error: null == error
          ? _value.error
          : error // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$EnumActivityStateImpl implements _EnumActivityState {
  const _$EnumActivityStateImpl(
      {required this.status, required this.activity, required this.error});

  @override
  final ActivityStatus status;
  @override
  final Activity activity;
  @override
  final String error;

  @override
  String toString() {
    return 'EnumActivityState(status: $status, activity: $activity, error: $error)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$EnumActivityStateImpl &&
            (identical(other.status, status) || other.status == status) &&
            (identical(other.activity, activity) ||
                other.activity == activity) &&
            (identical(other.error, error) || other.error == error));
  }

  @override
  int get hashCode => Object.hash(runtimeType, status, activity, error);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$EnumActivityStateImplCopyWith<_$EnumActivityStateImpl> get copyWith =>
      __$$EnumActivityStateImplCopyWithImpl<_$EnumActivityStateImpl>(
          this, _$identity);
}

abstract class _EnumActivityState implements EnumActivityState {
  const factory _EnumActivityState(
      {required final ActivityStatus status,
      required final Activity activity,
      required final String error}) = _$EnumActivityStateImpl;

  @override
  ActivityStatus get status;
  @override
  Activity get activity;
  @override
  String get error;
  @override
  @JsonKey(ignore: true)
  _$$EnumActivityStateImplCopyWith<_$EnumActivityStateImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
