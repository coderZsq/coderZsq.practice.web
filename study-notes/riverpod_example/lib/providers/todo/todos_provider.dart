import 'package:flutter_riverpod/flutter_riverpod.dart';

// StateNotifierProvider

// class TodosNotifier extends StateNotifier<List<Todo>> {
//   TodosNotifier() : super([]);
//
//   void addTodo(String desc) {
//     state = [...state, Todo.add(desc: desc)];
//   }
//
//   void toggleTodo(String id) {
//     state = [
//       for (final todo in state)
//         if (todo.id == id) todo.copyWith(completed: !todo.completed) else todo,
//     ];
//   }
//
//   void removeTodo(String id) {
//     state = [
//       for (final todo in state)
//         if (todo.id != id) todo,
//     ];
//   }
// }
//
// final todosProvider = StateNotifierProvider<TodosNotifier, List<Todo>>((ref) {
//   return TodosNotifier();
// });

// ChangeNotifierProvider
// class TodosNotifier extends ChangeNotifier {
//   List<Todo> todos = [];
//
//   void addTodo(String desc) {
//     todos.add(Todo.add(desc: desc));
//     notifyListeners();
//   }
//
//   void toggleTodo(String id) {
//     final todo = todos.firstWhere((todo) => todo.id == id);
//     todo.completed = !todo.completed;
//     notifyListeners();
//   }
//
//   void removeTodo(String id) {
//     todos.removeWhere((todo) => todo.id == id);
//     notifyListeners();
//   }
// }
//
// final todosProvider = ChangeNotifierProvider<TodosNotifier>((ref) {
//   return TodosNotifier();
// });

class Counter extends Notifier<int> {
  @override
  int build() {
    ref.onDispose(() {
      print('disposed');
    });
    return 0;
  }

  void increment() {
    state++;
  }

  void decrement() {
    state--;
  }
}

final counterProvider = NotifierProvider<Counter, int>(Counter.new);
