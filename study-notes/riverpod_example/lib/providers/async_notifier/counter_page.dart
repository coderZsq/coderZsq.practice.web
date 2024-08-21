import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'counter_provider.dart';

class CounterPage extends ConsumerWidget {
  const CounterPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final counter = ref.watch(counterProvider(10));
    print(counter);
    print(
        'isLoading: ${counter.isLoading}, isRefreshing: ${counter.isLoading}, isReloading: ${counter.isReloading}');
    print('hasValue: ${counter.hasValue}, hasError: ${counter.hasError}');

    return Scaffold(
        appBar: AppBar(
          title: const Text('Counter'),
        ),
        body: Center(
            child: counter.when(
          skipLoadingOnRefresh: false,
          data: (counter) {
            return Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  '$counter',
                  style: Theme.of(context).textTheme.headlineLarge,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    FloatingActionButton(
                        heroTag: 'decrement',
                        onPressed: () {
                          ref.read(counterProvider(10).notifier).decrement();
                        },
                        child: const Icon(Icons.remove)),
                    FloatingActionButton(
                        heroTag: 'increment',
                        onPressed: () {
                          ref.read(counterProvider(10).notifier).increment();
                        },
                        child: const Icon(Icons.add))
                  ],
                )
              ],
            );
          },
          error: (e, st) => Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                e.toString(),
                style: Theme.of(context).textTheme.headlineLarge,
                textAlign: TextAlign.center,
              ),
              const SizedBox(
                height: 20,
              ),
              OutlinedButton(
                  onPressed: () {
                    ref.invalidate(counterProvider(10));
                  },
                  child: Text(
                    'Refresh',
                    style: Theme.of(context).textTheme.titleLarge,
                  ))
            ],
          ),
          loading: () => const CircularProgressIndicator(),
        )));
  }
}
