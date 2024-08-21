import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_example/providers/extension/async_value_xx.dart';

import '../enum_async_activity/enum_async_activity_page.dart';
import '../models/activity.dart';
import 'async_activity_provider.dart';

class AsyncActivity extends ConsumerWidget {
  const AsyncActivity({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    ref.listen(asyncActivityProvider, (previous, next) {
      if (next.hasError && !next.isLoading) {
        showDialog(
            context: context,
            builder: (context) {
              return AlertDialog(
                content: Text(next.error.toString()),
              );
            });
      }
    });

    final activityState = ref.watch(asyncActivityProvider);

    print(activityState.toStr);
    print(activityState.props);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Async Activity'),
        actions: [
          IconButton(
              onPressed: () {
                ref.invalidate(asyncActivityProvider);
              },
              icon: const Icon(Icons.refresh))
        ],
      ),
      body: activityState.when(
        skipError: true,
        skipLoadingOnRefresh: false,
        data: (activity) {
          return ActivityWidget(activity: activity);
        },
        error: (e, st) => const Center(
            child: Text(
          'Get some activity',
          style: TextStyle(fontSize: 20, color: Colors.red),
          textAlign: TextAlign.center,
        )),
        loading: () => const Center(child: CircularProgressIndicator()),
      ),
      floatingActionButton: FloatingActionButton.extended(
          onPressed: () {
            final randomNumber = Random().nextInt(activityTypes.length);
            ref
                .read(asyncActivityProvider.notifier)
                .fetchActivity(activityTypes[randomNumber]);
          },
          label: const Text('New Activity')),
    );
  }
}
