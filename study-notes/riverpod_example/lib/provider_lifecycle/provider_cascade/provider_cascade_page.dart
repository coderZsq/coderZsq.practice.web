import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_example/provider_lifecycle/provider_cascade/providers.dart';

class ProviderCascadePage extends ConsumerWidget {
  const ProviderCascadePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final myAge = ref.watch(ageProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Provider Cascade'),
      ),
      body: Center(
        child: Text(myAge),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          ref.read(cascadeCounterProvider.notifier).increment();
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
