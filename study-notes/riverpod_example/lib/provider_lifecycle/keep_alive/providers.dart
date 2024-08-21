import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'providers.g.dart';

@Riverpod(keepAlive: true)
class KeepAliveCounter extends _$KeepAliveCounter {
  @override
  int build() {
    print('[keepAliveCounterProvider] initialized');
    ref.onDispose(() {
      print('[keepAliveCounterProvider] disposed');
    });
    ref.onCancel(() {
      print('[keepAliveCounterProvider] cancelled');
    });
    ref.onResume(() {
      print('[keepAliveCounterProvider] resumed');
    });
    ref.onAddListener(() {
      print('[keepAliveCounterProvider] listener added');
    });
    ref.onRemoveListener(() {
      print('[keepAliveCounterProvider] listener removed');
    });
    return 0;
  }

  void increment() {
    state++;
  }
}
