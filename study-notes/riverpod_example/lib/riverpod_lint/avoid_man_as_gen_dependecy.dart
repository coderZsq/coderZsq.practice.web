import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'avoid_man_as_gen_dependecy.g.dart';

final depProvider = Provider<int>((ref) {
  return 0;
});

@riverpod
int example(ExampleRef ref) {
  final int derived = ref.watch(depProvider);
  return derived;
}

class AvoidManAsGenDependency extends ConsumerWidget {
  const AvoidManAsGenDependency({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
            'Avoid Manual Provider As Generated Providers Dependencies'),
      ),
    );
  }
}
