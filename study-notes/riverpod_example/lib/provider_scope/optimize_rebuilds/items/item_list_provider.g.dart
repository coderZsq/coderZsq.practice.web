// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'item_list_provider.dart';

// **************************************************************************
// RiverpodGenerator
// **************************************************************************

String _$currentItemHash() => r'4f1fd6e316096787ee4eb1c7bdb66f26476138c3';

/// See also [currentItem].
@ProviderFor(currentItem)
final currentItemProvider = AutoDisposeProvider<String>.internal(
  currentItem,
  name: r'currentItemProvider',
  debugGetCreateSourceHash:
      const bool.fromEnvironment('dart.vm.product') ? null : _$currentItemHash,
  dependencies: const <ProviderOrFamily>[],
  allTransitiveDependencies: const <ProviderOrFamily>{},
);

typedef CurrentItemRef = AutoDisposeProviderRef<String>;
String _$itemListHash() => r'82134f8083c47f38d48ff639ef34a2a83e638cb0';

/// See also [ItemList].
@ProviderFor(ItemList)
final itemListProvider =
    AutoDisposeNotifierProvider<ItemList, List<String>>.internal(
  ItemList.new,
  name: r'itemListProvider',
  debugGetCreateSourceHash:
      const bool.fromEnvironment('dart.vm.product') ? null : _$itemListHash,
  dependencies: null,
  allTransitiveDependencies: null,
);

typedef _$ItemList = AutoDisposeNotifier<List<String>>;
// ignore_for_file: type=lint
// ignore_for_file: subtype_of_sealed_class, invalid_use_of_internal_member, invalid_use_of_visible_for_testing_member
