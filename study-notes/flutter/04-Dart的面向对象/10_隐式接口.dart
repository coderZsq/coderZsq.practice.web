main(List<String> args) {}

// Dart中没有哪一个关键字是来定义接口的
// 没有这些关键字interface/protocol
// 默认情况下所有的类都是隐式接口
// 当将一个类当做接口使用时, 那么实现这个接口的类, 必须实现接口中的所有方法
class Runner {
  void running() {}
}

class Flyer {
  void flying() {}
}

class Animal {
  void eating() {
    print("动物次东西");
  }

  void running() {
    print("running");
  }
}

class SuperMan extends Animal implements Runner, Flyer {
  @override
  void eating() {
    super.eating();
  }

  @override
  void flying() {}

  // @override
  // void running() {}
}
