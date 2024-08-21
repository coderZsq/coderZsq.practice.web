import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_example/providers/sealed_activity/sealed_activity_provider.dart';
import 'package:riverpod_example/providers/sealed_activity/sealed_activity_state.dart';

import '../enum_activity/enum_activity_page.dart';
import '../models/activity.dart';

class SealedActivityPage extends ConsumerStatefulWidget {
  const SealedActivityPage({super.key});

  @override
  ConsumerState createState() => _SealedActivityPageState();
}

class _SealedActivityPageState extends ConsumerState<SealedActivityPage> {
  Widget? prevWidget;

  @override
  void initState() {
    super.initState();
    Future.delayed(Duration.zero, () {
      ref.read(sealedActivityProvider.notifier).fetchActivity(activityTypes[0]);
    });
  }

  @override
  Widget build(BuildContext context) {
    ref.listen<SealedActivityState>(sealedActivityProvider, (previous, next) {
      switch (next) {
        case SealedActivityFailure(error: String error):
          showDialog(
              context: context,
              builder: (context) {
                return AlertDialog(
                  content: Text(error),
                );
              });
        case _:
      }
    });

    final activityState = ref.watch(sealedActivityProvider);

    return Scaffold(
        appBar: AppBar(title: const Text('SealedActivityNotifier'), actions: [
          IconButton(
              onPressed: () {
                ref.invalidate(sealedActivityProvider);
              },
              icon: const Icon(Icons.refresh))
        ]),
        body: switch (activityState) {
          SealedActivityInitial() => const Center(
              child: Text('Get some activity', style: TextStyle(fontSize: 20))),
          SealedActivityLoading() =>
            const Center(child: CircularProgressIndicator()),
          SealedActivitySuccess(activity: Activity activity) => prevWidget =
              ActivityWidget(activity: activity),
          SealedActivityFailure() => prevWidget == null
              ? const Center(
                  child: Text('Get some activity',
                      style: TextStyle(fontSize: 20, color: Colors.red)))
              : prevWidget!,
        },
        floatingActionButton: FloatingActionButton.extended(
            onPressed: () {
              ref
                  .read(sealedActivityProvider.notifier)
                  .fetchActivity(activityTypes[0]);
            },
            label: Text(
              "New Activity",
              style: Theme.of(context).textTheme.titleLarge,
            )));
  }
}
