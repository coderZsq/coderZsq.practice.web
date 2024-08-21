import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'example1_page.g.dart';

@Riverpod(keepAlive: true, dependencies: [])
class Ex1Counter extends _$Ex1Counter {
  @override
  int build() {
    return 0;
  }

  void increment(int incrementSize) {
    state += incrementSize;
  }
}

class Ex1Counter100 extends Ex1Counter {
  @override
  int build() {
    return 100;
  }
}

class Example1Page extends ConsumerWidget {
  const Example1Page({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Usage Example1'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const AddOne(),
            const Divider(
              height: 50,
            ),
            ProviderScope(
                overrides: [ex1CounterProvider], child: const AddTen()),
            const Divider(
              height: 50,
            ),
            ProviderScope(overrides: [
              ex1CounterProvider.overrideWith(() => Ex1Counter100())
            ], child: const AddHundred())
          ],
        ),
      ),
    );
  }
}

class AddOne extends ConsumerWidget {
  const AddOne({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Column(
      children: [
        Text('${ref.watch(ex1CounterProvider)}'),
        const SizedBox(height: 10),
        OutlinedButton(
            onPressed: () {
              ref.read(ex1CounterProvider.notifier).increment(1);
            },
            child: const Text('Add 1')),
      ],
    );
  }
}

class AddTen extends ConsumerWidget {
  const AddTen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Column(
      children: [
        Text('${ref.watch(ex1CounterProvider)}'),
        const SizedBox(height: 10),
        OutlinedButton(
            onPressed: () {
              ref.read(ex1CounterProvider.notifier).increment(10);
            },
            child: const Text('Add 10')),
      ],
    );
  }
}

class AddHundred extends ConsumerWidget {
  const AddHundred({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Column(
      children: [
        Text('${ref.watch(ex1CounterProvider)}'),
        const SizedBox(height: 10),
        OutlinedButton(
            onPressed: () {
              ref.read(ex1CounterProvider.notifier).increment(100);
            },
            child: const Text('Add 100')),
      ],
    );
  }
}
