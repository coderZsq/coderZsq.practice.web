import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'package:riverpod_example/provider_scope/sync_provider_for_async_apis/provider.dart';

part 'counter_provider.g.dart';

@riverpod
class Counter extends _$Counter {
  @override
  int build() {
    final preferences = ref.watch(sharedPreferencesProvider);
    final currentValue = preferences.getInt('counter') ?? 0;

    ref.listenSelf((previous, next) {
      print('previous: $previous, next: $next');
      preferences.setInt('counter', next);
    });

    return currentValue;
  }

  void increment() {
    state++;
  }
}
