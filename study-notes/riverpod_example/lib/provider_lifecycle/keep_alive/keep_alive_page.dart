import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_example/provider_lifecycle/keep_alive/providers.dart';

class KeepAlivePage extends ConsumerWidget {
  const KeepAlivePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final counter = ref.watch(keepAliveCounterProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Text('KeepAlive'),
      ),
      body: Center(
        child: Text('$counter'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          ref.read(keepAliveCounterProvider.notifier).increment();
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
