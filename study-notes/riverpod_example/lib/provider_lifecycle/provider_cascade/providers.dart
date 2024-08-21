import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'providers.g.dart';

@riverpod
class CascadeCounter extends _$CascadeCounter {
  @override
  int build() {
    print('[cascadeCounterProvider] initialized');
    ref.onDispose(() {
      print('[cascadeCounterProvider] disposed');
    });
    ref.onCancel(() {
      print('[cascadeCounterProvider] cancelled');
    });
    ref.onResume(() {
      print('[cascadeCounterProvider] resumed');
    });
    ref.onAddListener(() {
      print('[cascadeCounterProvider] listener added');
    });
    ref.onRemoveListener(() {
      print('[cascadeCounterProvider] listener removed');
    });
    return 0;
  }

  void increment() {
    state++;
  }
}

@riverpod
String age(AgeRef ref) {
  print('[ageProvider] initialized');
  ref.onDispose(() {
    print('[ageProvider] disposed');
  });
  ref.onCancel(() {
    print('[ageProvider] cancelled');
  });
  ref.onResume(() {
    print('[ageProvider] resumed');
  });
  ref.onAddListener(() {
    print('[ageProvider] listener added');
  });
  ref.onRemoveListener(() {
    print('[ageProvider] listener removed');
  });
  final age = ref.watch(cascadeCounterProvider);
  return 'I am $age years old';
}
