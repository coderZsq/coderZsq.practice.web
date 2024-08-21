// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'example2_page.dart';

// **************************************************************************
// RiverpodGenerator
// **************************************************************************

String _$ex2AdjustedCounterHash() =>
    r'02df2d3fca2ace8a6f19deb5f851c2fb3b1d707b';

/// See also [ex2AdjustedCounter].
@ProviderFor(ex2AdjustedCounter)
final ex2AdjustedCounterProvider = AutoDisposeProvider<int>.internal(
  ex2AdjustedCounter,
  name: r'ex2AdjustedCounterProvider',
  debugGetCreateSourceHash: const bool.fromEnvironment('dart.vm.product')
      ? null
      : _$ex2AdjustedCounterHash,
  dependencies: <ProviderOrFamily>[ex2CounterProvider],
  allTransitiveDependencies: <ProviderOrFamily>{
    ex2CounterProvider,
    ...?ex2CounterProvider.allTransitiveDependencies
  },
);

typedef Ex2AdjustedCounterRef = AutoDisposeProviderRef<int>;
String _$ex2CounterHash() => r'c85aba2481ec86194cc555c02aa11d5a7863ecf1';

/// See also [Ex2Counter].
@ProviderFor(Ex2Counter)
final ex2CounterProvider = NotifierProvider<Ex2Counter, int>.internal(
  Ex2Counter.new,
  name: r'ex2CounterProvider',
  debugGetCreateSourceHash:
      const bool.fromEnvironment('dart.vm.product') ? null : _$ex2CounterHash,
  dependencies: const <ProviderOrFamily>[],
  allTransitiveDependencies: const <ProviderOrFamily>{},
);

typedef _$Ex2Counter = Notifier<int>;
// ignore_for_file: type=lint
// ignore_for_file: subtype_of_sealed_class, invalid_use_of_internal_member, invalid_use_of_visible_for_testing_member
