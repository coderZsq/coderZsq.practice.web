import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'avoid_public_notifier_properties.g.dart';

@riverpod
class CounterWithPublicProperty extends _$CounterWithPublicProperty {
  final int internalVar = 10;

  @override
  int build() {
    return internalVar;
  }

  void increment() => state++;
}

@riverpod
class CounterWithPrivateProperty extends _$CounterWithPrivateProperty {
  final int _internalVar = 10;

  @override
  int build() {
    return _internalVar;
  }

  void increment() => state++;
}

class AvoidPublicNotifierProperties extends ConsumerWidget {
  const AvoidPublicNotifierProperties({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final publicCounter = ref.watch(counterWithPublicPropertyProvider);
    final privateCounter = ref.watch(counterWithPrivatePropertyProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Avoid Public Notifier Properties'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('$publicCounter'),
            Text('$privateCounter'),
          ],
        ),
      ),
    );
  }
}
