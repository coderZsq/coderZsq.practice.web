import 'dart:async';

import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'counter_provider.g.dart';

// class Counter extends AutoDisposeFamilyAsyncNotifier<int, int> {
//   @override
//   FutureOr<int> build(int arg) async {
//     ref.onDispose(() {
//       print('[counterProvider] dispose');
//     });
//     await waitSecond();
//     return arg;
//   }
//
//   // @override
//   // FutureOr<int> build() {
//   //   ref.onDispose(() {
//   //     print('[counterProvider] dispose');
//   //   });
//   //   return Future.value(0);
//   // }
//
//   Future<void> waitSecond() => Future.delayed(const Duration(seconds: 1));
//
//   Future<void> increment() async {
//     state = const AsyncLoading();
//
//     state = await AsyncValue.guard(() async {
//       await waitSecond();
//       // if (state.value! == 2) {
//       //   throw 'Fail to increment';
//       // }
//       return state.value! + 1;
//     });
//
//     // try {
//     //   await waitSecond();
//     //   // throw 'Fail to increment';
//     //   state = AsyncData(state.value! + 1);
//     // } catch (error, stackTrace) {
//     //   state = AsyncError(error, stackTrace);
//     // }
//   }
//
//   Future<void> decrement() async {
//     state = const AsyncLoading();
//
//     state = await AsyncValue.guard(() async {
//       await waitSecond();
//       return state.value! - 1;
//     });
//
//     // try {
//     //   await waitSecond();
//     //   state = AsyncData(state.value! - 1);
//     // } catch (error, stackTrace) {
//     //   state = AsyncError(error, stackTrace);
//     // }
//   }
// }
//
// final counterProvider =
//     AsyncNotifierProvider.autoDispose.family<Counter, int, int>(Counter.new);

@riverpod
class Counter extends _$Counter {
  @override
  FutureOr<int> build(int initialValue) async {
    ref.onDispose(() {
      print('[counterProvider] dispose');
    });
    await waitSecond();
    return initialValue;
  }

  Future<void> waitSecond() => Future.delayed(const Duration(seconds: 1));

  Future<void> increment() async {
    state = const AsyncLoading();

    state = await AsyncValue.guard(() async {
      await waitSecond();
      return state.value! + 1;
    });
  }

  Future<void> decrement() async {
    state = const AsyncLoading();

    state = await AsyncValue.guard(() async {
      await waitSecond();
      return state.value! - 1;
    });
  }
}
