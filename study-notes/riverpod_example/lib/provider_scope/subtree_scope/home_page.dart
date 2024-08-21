import 'package:flutter/material.dart';
import 'package:riverpod_example/main.dart';

import 'example1_page.dart';
import 'example2_page.dart';

class SubTreeScopeHomePage extends StatelessWidget {
  const SubTreeScopeHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ListView(
          padding: const EdgeInsets.symmetric(horizontal: 30),
          shrinkWrap: true,
          children: const [
            CustomButton(title: 'Usage Example 1', child: Example1Page()),
            CustomButton(title: 'Usage Example 2', child: Example2Page())
          ],
        ),
      ),
    );
  }
}
