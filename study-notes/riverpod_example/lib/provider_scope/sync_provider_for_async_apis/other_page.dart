import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_example/provider_scope/sync_provider_for_async_apis/provider.dart';

class OtherPage extends StatelessWidget {
  const OtherPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Other'),
        ),
        body: Center(child: Consumer(
          builder: (context, ref, child) {
            final preference = ref.watch(sharedPreferencesProvider);
            final val = preference.getInt('counter');
            return Text(
              '$val',
              style: const TextStyle(fontSize: 52),
            );
          },
        )));
  }
}
