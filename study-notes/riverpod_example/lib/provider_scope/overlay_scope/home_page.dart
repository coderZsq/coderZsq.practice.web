import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'counter_provider.dart';
import 'other_page.dart';

class OverlayHomePage extends ConsumerWidget {
  const OverlayHomePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              '${ref.watch(counterProvider)}',
              style: const TextStyle(fontSize: 36),
            ),
            const Divider(
              height: 50,
            ),
            const Text(
              'Unintended ProviderScope',
              style: TextStyle(fontSize: 24),
            ),
            const SizedBox(
              height: 20,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                OutlinedButton(
                    onPressed: () {
                      showDialog(
                          context: context,
                          builder: (c) {
                            return const AlertDialog(
                              content: CounterDisplay(),
                            );
                          });
                    },
                    child: const Text(
                      'ShowDialog',
                      style: TextStyle(fontSize: 20),
                    )),
                const SizedBox(
                  width: 10,
                ),
                OutlinedButton(
                    onPressed: () {
                      Navigator.of(context).push(
                        MaterialPageRoute(
                          builder: (context) => const OtherPage(),
                        ),
                      );
                    },
                    child: const Text(
                      'Go to Other',
                      style: TextStyle(fontSize: 20),
                    ))
              ],
            ),
            const Divider(
              height: 50,
            ),
            const Text(
              'Intended ProviderScope',
              style: TextStyle(fontSize: 24),
            ),
            const SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                FilledButton(
                    onPressed: () {
                      showDialog(
                          context: context,
                          builder: (c) {
                            return ProviderScope(
                                parent: ProviderScope.containerOf(context),
                                child: const AlertDialog(
                                  content: CounterDisplay(),
                                ));
                          });
                    },
                    child: const Text(
                      'ShowDialog',
                      style: TextStyle(fontSize: 20),
                    )),
                const SizedBox(
                  width: 10,
                ),
                FilledButton(
                    onPressed: () {
                      Navigator.of(context).push(
                        MaterialPageRoute(
                          builder: (c) => ProviderScope(
                              parent: ProviderScope.containerOf(context),
                              child: const OtherPage()),
                        ),
                      );
                    },
                    child: const Text(
                      'Go to Other',
                      style: TextStyle(fontSize: 20),
                    ))
              ],
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          ref.read(counterProvider.notifier).increment();
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}

class CounterDisplay extends ConsumerWidget {
  const CounterDisplay({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final counter = ref.watch(counterProvider);
    return Text(
      '$counter',
      style: const TextStyle(fontSize: 24),
    );
  }
}
