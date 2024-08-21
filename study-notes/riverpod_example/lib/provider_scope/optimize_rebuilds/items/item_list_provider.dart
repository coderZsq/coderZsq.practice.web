import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'item_list_provider.g.dart';

@riverpod
class ItemList extends _$ItemList {
  @override
  List<String> build() {
    return [];
  }

  void addItem(String item) {
    state = [...state, item];
  }

  void deleteItem(String item) {
    state = [
      for (final t in state)
        if (t != item) t
    ];
  }
}

@Riverpod(dependencies: [])
String currentItem(CurrentItemRef ref) {
  throw UnimplementedError();
}
