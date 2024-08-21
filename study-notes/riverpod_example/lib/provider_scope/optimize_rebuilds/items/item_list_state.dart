import 'package:freezed_annotation/freezed_annotation.dart';

part 'item_list_state.freezed.dart';

@freezed
class ItemListState with _$ItemListState {
  const factory ItemListState({
    required List<String> items,
  }) = _ItemListState;
}
