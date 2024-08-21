// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'provider_parameters.dart';

// **************************************************************************
// RiverpodGenerator
// **************************************************************************

String _$counterNoEqualHash() => r'5c104144d9d6a684d8c690f721dbb0713a513b04';

/// Copied from Dart SDK
class _SystemHash {
  _SystemHash._();

  static int combine(int hash, int value) {
    // ignore: parameter_assignments
    hash = 0x1fffffff & (hash + value);
    // ignore: parameter_assignments
    hash = 0x1fffffff & (hash + ((0x0007ffff & hash) << 10));
    return hash ^ (hash >> 6);
  }

  static int finish(int hash) {
    // ignore: parameter_assignments
    hash = 0x1fffffff & (hash + ((0x03ffffff & hash) << 3));
    // ignore: parameter_assignments
    hash = hash ^ (hash >> 11);
    return 0x1fffffff & (hash + ((0x00003fff & hash) << 15));
  }
}

abstract class _$CounterNoEqual extends BuildlessAutoDisposeNotifier<int> {
  late final NoEqual counter;

  int build(
    NoEqual counter,
  );
}

/// See also [CounterNoEqual].
@ProviderFor(CounterNoEqual)
const counterNoEqualProvider = CounterNoEqualFamily();

/// See also [CounterNoEqual].
class CounterNoEqualFamily extends Family<int> {
  /// See also [CounterNoEqual].
  const CounterNoEqualFamily();

  /// See also [CounterNoEqual].
  CounterNoEqualProvider call(
    NoEqual counter,
  ) {
    return CounterNoEqualProvider(
      counter,
    );
  }

  @override
  CounterNoEqualProvider getProviderOverride(
    covariant CounterNoEqualProvider provider,
  ) {
    return call(
      provider.counter,
    );
  }

  static const Iterable<ProviderOrFamily>? _dependencies = null;

  @override
  Iterable<ProviderOrFamily>? get dependencies => _dependencies;

  static const Iterable<ProviderOrFamily>? _allTransitiveDependencies = null;

  @override
  Iterable<ProviderOrFamily>? get allTransitiveDependencies =>
      _allTransitiveDependencies;

  @override
  String? get name => r'counterNoEqualProvider';
}

/// See also [CounterNoEqual].
class CounterNoEqualProvider
    extends AutoDisposeNotifierProviderImpl<CounterNoEqual, int> {
  /// See also [CounterNoEqual].
  CounterNoEqualProvider(
    NoEqual counter,
  ) : this._internal(
          () => CounterNoEqual()..counter = counter,
          from: counterNoEqualProvider,
          name: r'counterNoEqualProvider',
          debugGetCreateSourceHash:
              const bool.fromEnvironment('dart.vm.product')
                  ? null
                  : _$counterNoEqualHash,
          dependencies: CounterNoEqualFamily._dependencies,
          allTransitiveDependencies:
              CounterNoEqualFamily._allTransitiveDependencies,
          counter: counter,
        );

  CounterNoEqualProvider._internal(
    super._createNotifier, {
    required super.name,
    required super.dependencies,
    required super.allTransitiveDependencies,
    required super.debugGetCreateSourceHash,
    required super.from,
    required this.counter,
  }) : super.internal();

  final NoEqual counter;

  @override
  int runNotifierBuild(
    covariant CounterNoEqual notifier,
  ) {
    return notifier.build(
      counter,
    );
  }

  @override
  Override overrideWith(CounterNoEqual Function() create) {
    return ProviderOverride(
      origin: this,
      override: CounterNoEqualProvider._internal(
        () => create()..counter = counter,
        from: from,
        name: null,
        dependencies: null,
        allTransitiveDependencies: null,
        debugGetCreateSourceHash: null,
        counter: counter,
      ),
    );
  }

  @override
  AutoDisposeNotifierProviderElement<CounterNoEqual, int> createElement() {
    return _CounterNoEqualProviderElement(this);
  }

  @override
  bool operator ==(Object other) {
    return other is CounterNoEqualProvider && other.counter == counter;
  }

  @override
  int get hashCode {
    var hash = _SystemHash.combine(0, runtimeType.hashCode);
    hash = _SystemHash.combine(hash, counter.hashCode);

    return _SystemHash.finish(hash);
  }
}

mixin CounterNoEqualRef on AutoDisposeNotifierProviderRef<int> {
  /// The parameter `counter` of this provider.
  NoEqual get counter;
}

class _CounterNoEqualProviderElement
    extends AutoDisposeNotifierProviderElement<CounterNoEqual, int>
    with CounterNoEqualRef {
  _CounterNoEqualProviderElement(super.provider);

  @override
  NoEqual get counter => (origin as CounterNoEqualProvider).counter;
}

String _$counterNoEqualConstHash() =>
    r'4f4487a84595ac387092594aecf1668c312c06ba';

abstract class _$CounterNoEqualConst extends BuildlessAutoDisposeNotifier<int> {
  late final NoEqualConst counter;

  int build(
    NoEqualConst counter,
  );
}

/// See also [CounterNoEqualConst].
@ProviderFor(CounterNoEqualConst)
const counterNoEqualConstProvider = CounterNoEqualConstFamily();

/// See also [CounterNoEqualConst].
class CounterNoEqualConstFamily extends Family<int> {
  /// See also [CounterNoEqualConst].
  const CounterNoEqualConstFamily();

  /// See also [CounterNoEqualConst].
  CounterNoEqualConstProvider call(
    NoEqualConst counter,
  ) {
    return CounterNoEqualConstProvider(
      counter,
    );
  }

  @override
  CounterNoEqualConstProvider getProviderOverride(
    covariant CounterNoEqualConstProvider provider,
  ) {
    return call(
      provider.counter,
    );
  }

  static const Iterable<ProviderOrFamily>? _dependencies = null;

  @override
  Iterable<ProviderOrFamily>? get dependencies => _dependencies;

  static const Iterable<ProviderOrFamily>? _allTransitiveDependencies = null;

  @override
  Iterable<ProviderOrFamily>? get allTransitiveDependencies =>
      _allTransitiveDependencies;

  @override
  String? get name => r'counterNoEqualConstProvider';
}

/// See also [CounterNoEqualConst].
class CounterNoEqualConstProvider
    extends AutoDisposeNotifierProviderImpl<CounterNoEqualConst, int> {
  /// See also [CounterNoEqualConst].
  CounterNoEqualConstProvider(
    NoEqualConst counter,
  ) : this._internal(
          () => CounterNoEqualConst()..counter = counter,
          from: counterNoEqualConstProvider,
          name: r'counterNoEqualConstProvider',
          debugGetCreateSourceHash:
              const bool.fromEnvironment('dart.vm.product')
                  ? null
                  : _$counterNoEqualConstHash,
          dependencies: CounterNoEqualConstFamily._dependencies,
          allTransitiveDependencies:
              CounterNoEqualConstFamily._allTransitiveDependencies,
          counter: counter,
        );

  CounterNoEqualConstProvider._internal(
    super._createNotifier, {
    required super.name,
    required super.dependencies,
    required super.allTransitiveDependencies,
    required super.debugGetCreateSourceHash,
    required super.from,
    required this.counter,
  }) : super.internal();

  final NoEqualConst counter;

  @override
  int runNotifierBuild(
    covariant CounterNoEqualConst notifier,
  ) {
    return notifier.build(
      counter,
    );
  }

  @override
  Override overrideWith(CounterNoEqualConst Function() create) {
    return ProviderOverride(
      origin: this,
      override: CounterNoEqualConstProvider._internal(
        () => create()..counter = counter,
        from: from,
        name: null,
        dependencies: null,
        allTransitiveDependencies: null,
        debugGetCreateSourceHash: null,
        counter: counter,
      ),
    );
  }

  @override
  AutoDisposeNotifierProviderElement<CounterNoEqualConst, int> createElement() {
    return _CounterNoEqualConstProviderElement(this);
  }

  @override
  bool operator ==(Object other) {
    return other is CounterNoEqualConstProvider && other.counter == counter;
  }

  @override
  int get hashCode {
    var hash = _SystemHash.combine(0, runtimeType.hashCode);
    hash = _SystemHash.combine(hash, counter.hashCode);

    return _SystemHash.finish(hash);
  }
}

mixin CounterNoEqualConstRef on AutoDisposeNotifierProviderRef<int> {
  /// The parameter `counter` of this provider.
  NoEqualConst get counter;
}

class _CounterNoEqualConstProviderElement
    extends AutoDisposeNotifierProviderElement<CounterNoEqualConst, int>
    with CounterNoEqualConstRef {
  _CounterNoEqualConstProviderElement(super.provider);

  @override
  NoEqualConst get counter => (origin as CounterNoEqualConstProvider).counter;
}

String _$counterEqualHash() => r'c0d2e7449c666b38ec22f4a0982058f1ed2a741f';

abstract class _$CounterEqual extends BuildlessAutoDisposeNotifier<int> {
  late final Equal counter;

  int build(
    Equal counter,
  );
}

/// See also [CounterEqual].
@ProviderFor(CounterEqual)
const counterEqualProvider = CounterEqualFamily();

/// See also [CounterEqual].
class CounterEqualFamily extends Family<int> {
  /// See also [CounterEqual].
  const CounterEqualFamily();

  /// See also [CounterEqual].
  CounterEqualProvider call(
    Equal counter,
  ) {
    return CounterEqualProvider(
      counter,
    );
  }

  @override
  CounterEqualProvider getProviderOverride(
    covariant CounterEqualProvider provider,
  ) {
    return call(
      provider.counter,
    );
  }

  static const Iterable<ProviderOrFamily>? _dependencies = null;

  @override
  Iterable<ProviderOrFamily>? get dependencies => _dependencies;

  static const Iterable<ProviderOrFamily>? _allTransitiveDependencies = null;

  @override
  Iterable<ProviderOrFamily>? get allTransitiveDependencies =>
      _allTransitiveDependencies;

  @override
  String? get name => r'counterEqualProvider';
}

/// See also [CounterEqual].
class CounterEqualProvider
    extends AutoDisposeNotifierProviderImpl<CounterEqual, int> {
  /// See also [CounterEqual].
  CounterEqualProvider(
    Equal counter,
  ) : this._internal(
          () => CounterEqual()..counter = counter,
          from: counterEqualProvider,
          name: r'counterEqualProvider',
          debugGetCreateSourceHash:
              const bool.fromEnvironment('dart.vm.product')
                  ? null
                  : _$counterEqualHash,
          dependencies: CounterEqualFamily._dependencies,
          allTransitiveDependencies:
              CounterEqualFamily._allTransitiveDependencies,
          counter: counter,
        );

  CounterEqualProvider._internal(
    super._createNotifier, {
    required super.name,
    required super.dependencies,
    required super.allTransitiveDependencies,
    required super.debugGetCreateSourceHash,
    required super.from,
    required this.counter,
  }) : super.internal();

  final Equal counter;

  @override
  int runNotifierBuild(
    covariant CounterEqual notifier,
  ) {
    return notifier.build(
      counter,
    );
  }

  @override
  Override overrideWith(CounterEqual Function() create) {
    return ProviderOverride(
      origin: this,
      override: CounterEqualProvider._internal(
        () => create()..counter = counter,
        from: from,
        name: null,
        dependencies: null,
        allTransitiveDependencies: null,
        debugGetCreateSourceHash: null,
        counter: counter,
      ),
    );
  }

  @override
  AutoDisposeNotifierProviderElement<CounterEqual, int> createElement() {
    return _CounterEqualProviderElement(this);
  }

  @override
  bool operator ==(Object other) {
    return other is CounterEqualProvider && other.counter == counter;
  }

  @override
  int get hashCode {
    var hash = _SystemHash.combine(0, runtimeType.hashCode);
    hash = _SystemHash.combine(hash, counter.hashCode);

    return _SystemHash.finish(hash);
  }
}

mixin CounterEqualRef on AutoDisposeNotifierProviderRef<int> {
  /// The parameter `counter` of this provider.
  Equal get counter;
}

class _CounterEqualProviderElement
    extends AutoDisposeNotifierProviderElement<CounterEqual, int>
    with CounterEqualRef {
  _CounterEqualProviderElement(super.provider);

  @override
  Equal get counter => (origin as CounterEqualProvider).counter;
}
// ignore_for_file: type=lint
// ignore_for_file: subtype_of_sealed_class, invalid_use_of_internal_member, invalid_use_of_visible_for_testing_member
