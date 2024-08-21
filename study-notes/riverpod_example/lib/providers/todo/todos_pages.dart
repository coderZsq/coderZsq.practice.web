import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'todos_provider.dart';

class TodosPages extends ConsumerWidget {
  const TodosPages({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final counter = ref.watch(counterProvider);

    return Scaffold(
        appBar: AppBar(title: const Text('Ticker')),
        body: Center(
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            Text('$counter', style: Theme.of(context).textTheme.headlineLarge),
            const SizedBox(height: 20),
            OutlinedButton(
                onPressed: () {
                  ref.read(counterProvider.notifier).increment();
                },
                child: Text(
                  'Increment',
                  style: Theme.of(context).textTheme.headlineLarge,
                ))
          ]),
        ));
  }
}

// class AddTodo extends ConsumerStatefulWidget {
//   const AddTodo({super.key});
//
//   @override
//   ConsumerState<AddTodo> createState() => _AddTodoState();
// }
//
// class _AddTodoState extends ConsumerState<AddTodo> {
//   final _todoController = TextEditingController();
//
//   @override
//   void dispose() {
//     _todoController.dispose();
//     super.dispose();
//   }
//
//   @override
//   Widget build(BuildContext context) {
//     return Padding(
//         padding: const EdgeInsets.all(8.0),
//         child: TextField(
//           controller: _todoController,
//           decoration: InputDecoration(
//             labelText: 'Add anew todo',
//           ),
//           onSubmitted: (desc) {
//             if (desc.isNotEmpty) {
//               ref.read(todosProvider.notifier).addTodo(desc);
//               _todoController.clear();
//             }
//           },
//         ));
//   }
// }
