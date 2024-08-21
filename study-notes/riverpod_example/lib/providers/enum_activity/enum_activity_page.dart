import 'package:bulleted_list/bulleted_list.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/activity.dart';
import 'enum_activity_provider.dart';
import 'enum_activity_state.dart';

class EnumActivityPage extends ConsumerStatefulWidget {
  const EnumActivityPage({super.key});

  @override
  ConsumerState<EnumActivityPage> createState() => _EnumActivityPageState();
}

class _EnumActivityPageState extends ConsumerState<EnumActivityPage> {
  @override
  void initState() {
    super.initState();
    Future.delayed(Duration.zero, () {
      ref.read(enumActivityProvider.notifier).fetchActivity(activityTypes[0]);
    });
  }

  @override
  Widget build(BuildContext context) {
    ref.listen<EnumActivityState>(enumActivityProvider, (previous, next) {
      if (next.status == ActivityStatus.failure) {
        showDialog(
            context: context,
            builder: (context) {
              return AlertDialog(content: Text(next.error));
            });
      }
    });

    final activityState = ref.watch(enumActivityProvider);

    return Scaffold(
        appBar: AppBar(
          title: const Text('EnumActivityNotifier'),
          actions: [
            IconButton(
                onPressed: () {
                  ref
                      .read(enumActivityProvider.notifier)
                      .fetchActivity(activityTypes[0]);
                },
                icon: const Icon(Icons.refresh)),
          ],
        ),
        body: switch (activityState.status) {
          ActivityStatus.initial => const Center(
              child: Text('Get some activity', style: TextStyle(fontSize: 20)),
            ),
          ActivityStatus.loading => Stack(
              children: [
                ActivityWidget(activity: activityState.activity),
                const Center(child: CircularProgressIndicator())
              ],
            ),
          ActivityStatus.failure => activityState.activity == Activity.empty()
              ? const Center(
                  child: Text('Get some activity',
                      style: TextStyle(
                        fontSize: 20,
                        color: Colors.red,
                      )))
              : ActivityWidget(activity: activityState.activity),
          ActivityStatus.success =>
            ActivityWidget(activity: activityState.activity),
        },
        floatingActionButton: FloatingActionButton.extended(
          onPressed: () {
            ref.read(enumActivityProvider.notifier).fetchData();
          },
          label: Text('New Activity',
              style: Theme.of(context).textTheme.titleLarge),
        ));
  }
}

class ActivityWidget extends StatelessWidget {
  final Activity activity;

  const ActivityWidget({
    super.key,
    required this.activity,
  });

  @override
  Widget build(BuildContext context) {
    print(activity.data);

    return Column(children: [
      Text(
        activity.type,
        style: Theme.of(context).textTheme.headlineMedium,
      ),
      const Divider(),
      BulletedList(
        bullet: const Icon(Icons.check, color: Colors.green),
        listItems: [
          'activity: ${activity.activity}',
          'accessibility: ${activity.accessibility}',
          'participants: ${activity.participants}',
          'price: ${activity.price}',
          'key: ${activity.key}',
        ],
        style: Theme.of(context).textTheme.titleLarge,
      ),
      const Divider(),
      // BulletedList(
      //   bullet: const Icon(Icons.check, color: Colors.green),
      //   listItems: activity.data.map((e) => Text('$e')).toList(),
      //   style: Theme.of(context).textTheme.titleLarge,
      // ),
      Consumer(
        builder: (context, ref, child) {
          final listData = ref.watch(listDataProvider);
          return ListView(
            shrinkWrap: true,
            children: listData.map((e) => Text('$e')).toList(),
          );
        },
      )
    ]);
  }
}
