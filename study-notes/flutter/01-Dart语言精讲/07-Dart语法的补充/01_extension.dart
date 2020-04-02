main(List<String> args) {
  final message = "Hello·World";
  final result = message.sq_split("·");
  print(result);
}

extension StrSplit on String {
  List<String> sq_split(String split) {
    return this.split(split);
  }
}

// class Person {}

// extension PersonE1 on Person {}

// extension PersonE2 on Person {}
