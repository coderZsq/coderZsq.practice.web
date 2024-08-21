// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'item_list_state.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#adding-getters-and-methods-to-our-models');

/// @nodoc
mixin _$ItemListState {
  List<String> get items => throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $ItemListStateCopyWith<ItemListState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ItemListStateCopyWith<$Res> {
  factory $ItemListStateCopyWith(
          ItemListState value, $Res Function(ItemListState) then) =
      _$ItemListStateCopyWithImpl<$Res, ItemListState>;
  @useResult
  $Res call({List<String> items});
}

/// @nodoc
class _$ItemListStateCopyWithImpl<$Res, $Val extends ItemListState>
    implements $ItemListStateCopyWith<$Res> {
  _$ItemListStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? items = null,
  }) {
    return _then(_value.copyWith(
      items: null == items
          ? _value.items
          : items // ignore: cast_nullable_to_non_nullable
              as List<String>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$ItemListStateImplCopyWith<$Res>
    implements $ItemListStateCopyWith<$Res> {
  factory _$$ItemListStateImplCopyWith(
          _$ItemListStateImpl value, $Res Function(_$ItemListStateImpl) then) =
      __$$ItemListStateImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({List<String> items});
}

/// @nodoc
class __$$ItemListStateImplCopyWithImpl<$Res>
    extends _$ItemListStateCopyWithImpl<$Res, _$ItemListStateImpl>
    implements _$$ItemListStateImplCopyWith<$Res> {
  __$$ItemListStateImplCopyWithImpl(
      _$ItemListStateImpl _value, $Res Function(_$ItemListStateImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? items = null,
  }) {
    return _then(_$ItemListStateImpl(
      items: null == items
          ? _value._items
          : items // ignore: cast_nullable_to_non_nullable
              as List<String>,
    ));
  }
}

/// @nodoc

class _$ItemListStateImpl implements _ItemListState {
  const _$ItemListStateImpl({required final List<String> items})
      : _items = items;

  final List<String> _items;
  @override
  List<String> get items {
    if (_items is EqualUnmodifiableListView) return _items;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_items);
  }

  @override
  String toString() {
    return 'ItemListState(items: $items)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$ItemListStateImpl &&
            const DeepCollectionEquality().equals(other._items, _items));
  }

  @override
  int get hashCode =>
      Object.hash(runtimeType, const DeepCollectionEquality().hash(_items));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$ItemListStateImplCopyWith<_$ItemListStateImpl> get copyWith =>
      __$$ItemListStateImplCopyWithImpl<_$ItemListStateImpl>(this, _$identity);
}

abstract class _ItemListState implements ItemListState {
  const factory _ItemListState({required final List<String> items}) =
      _$ItemListStateImpl;

  @override
  List<String> get items;
  @override
  @JsonKey(ignore: true)
  _$$ItemListStateImplCopyWith<_$ItemListStateImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
