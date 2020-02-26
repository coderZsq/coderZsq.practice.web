main(List<String> args) {
  Person.courseTime = "8:00";
  print(Person.courseTime);
  Person.gotoCourse();
}

class Person {
  // 成员属性
  String name;

  // 静态属性(类属性)
  static String courseTime;

  // 对象方法
  void eating() {
    print("eating");
  }

  // 静态方法(类方法)
  static void gotoCourse() {
    print("去上课");
  }
}
