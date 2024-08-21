import 'package:uuid/uuid.dart';

// part 'todo_model.freezed.dart';

Uuid uuid = const Uuid();

// @freezed
// class Todo with _$Todo {
//   const factory Todo({
//     required String id,
//     required String desc,
//     @Default(false) bool completed,
//   }) = _Todo;
//
//   factory Todo.add({required String desc}) {
//     return Todo(
//       id: uuid.v4(),
//       desc: desc,
//     );
//   }
// }

class Todo {
  Todo({
    required this.id,
    required this.desc,
    this.completed = false,
  });

  final String id;
  final String desc;
  bool completed;

  factory Todo.add({required String desc}) {
    return Todo(
      id: uuid.v4(),
      desc: desc,
    );
  }

  @override
  String toString() {
    return 'Todo(id: ${uuid.v4()}, desc: $desc, completed: $completed)';
  }
}
