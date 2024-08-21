import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:riverpod_example/async_value_detail/weather_first_page.dart';
import 'package:riverpod_example/async_value_detail/weather_second_page.dart';
import 'package:riverpod_example/provider_lifecycle/async_keep_alive/products_page.dart';
import 'package:riverpod_example/provider_lifecycle/auto_dispose/auto_dispose_page.dart';
import 'package:riverpod_example/provider_lifecycle/keep_alive/keep_alive_page.dart';
import 'package:riverpod_example/provider_lifecycle/provider_cascade/provider_cascade_page.dart';
import 'package:riverpod_example/provider_lifecycle/sync_keep_alive/sync_keep_alive_page.dart';
import 'package:riverpod_example/provider_scope/optimize_rebuilds/pages/items_page.dart';
import 'package:riverpod_example/provider_scope/overlay_scope/counter_provider.dart';
import 'package:riverpod_example/provider_scope/overlay_scope/home_page.dart';
import 'package:riverpod_example/provider_scope/subtree_scope/home_page.dart';
import 'package:riverpod_example/provider_scope/sync_provider_for_async_apis/my_home_page.dart';
import 'package:riverpod_example/provider_scope/sync_provider_for_async_apis/provider.dart';
import 'package:riverpod_example/providers/async_activity/async_activity_page.dart';
import 'package:riverpod_example/providers/async_notifier/counter_page.dart';
import 'package:riverpod_example/providers/enum_activity/enum_activity_page.dart';
import 'package:riverpod_example/providers/enum_async_activity/enum_async_activity_page.dart';
import 'package:riverpod_example/providers/sealed_activity/sealed_actiivity_page.dart';
import 'package:riverpod_example/providers/sealed_async_activity/sealed_async_actiivity_page.dart';
import 'package:riverpod_example/providers/stream_notifer/timer_page.dart';
import 'package:riverpod_example/providers/todo/todos_pages.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final prefs = await SharedPreferences.getInstance();
  runApp(ProviderScope(overrides: [
    sharedPreferencesProvider.overrideWithValue(prefs),
  ], child: const MyApp()));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'StateNotifierProvider',
      debugShowCheckedModeBanner: false,
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        shrinkWrap: true,
        children: <Widget>[
          const CustomButton(title: 'Todo', child: TodosPages()),
          const CustomButton(title: 'Enum Activity', child: EnumActivityPage()),
          const CustomButton(
              title: 'Sealed Activity', child: SealedActivityPage()),
          const CustomButton(
              title: 'Enum Async Activity', child: EnumAsyncActivityPage()),
          const CustomButton(
              title: 'Sealed Async Activity', child: SealedAsyncActivityPage()),
          const CustomButton(
              title: 'Async Notifier Counter', child: CounterPage()),
          const CustomButton(title: 'Async Activity', child: AsyncActivity()),
          const CustomButton(title: 'Timer', child: TimerPage()),
          const CustomButton(title: 'WeatherFirst', child: WeatherFirstPage()),
          const CustomButton(
              title: 'WeatherSecond', child: WeatherSecondPage()),
          const CustomButton(title: 'AutoDispose', child: AutoDisposePage()),
          const CustomButton(title: 'KeepAlive', child: KeepAlivePage()),
          const CustomButton(
              title: 'SyncKeepAlive', child: SyncKeepAlivePage()),
          const CustomButton(title: 'AsyncKeepAlive', child: ProductsPage()),
          const CustomButton(title: 'Cascade', child: ProviderCascadePage()),
          const CustomButton(title: 'Optimize Rebuild', child: ItemsPage()),
          const CustomButton(
              title: 'Async API in Sync Provider', child: MyScopeHomePage()),
          CustomButton(
              title: 'Overlay Scope',
              child: ProviderScope(
                  overrides: [counterProvider.overrideWith(() => Counter100())],
                  child: const OverlayHomePage())),
          const CustomButton(
              title: 'Subtree Scope', child: SubTreeScopeHomePage())
        ],
      ),
    );
  }
}

class CustomButton extends ConsumerWidget {
  final String title;
  final Widget child;

  const CustomButton({required this.title, required this.child, super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return InkWell(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => child),
        );
      },
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 40),
        decoration: BoxDecoration(
          color: Colors.blue,
          borderRadius: BorderRadius.circular(10),
        ),
        child: Center(
          child: Text(
            title,
            style: const TextStyle(color: Colors.white, fontSize: 18),
          ),
        ),
      ),
    );
  }
}
