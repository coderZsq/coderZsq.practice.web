import 'package:flutter/material.dart';
import 'package:riverpod_example/providers/stream_notifer/timer_value.dart';

import 'action_buttons.dart';

class TimerPage extends StatelessWidget {
  const TimerPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Stream Timer'),
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [TimerValue(), SizedBox(height: 20), ActionButtons()],
        ),
      ),
    );
  }
}
