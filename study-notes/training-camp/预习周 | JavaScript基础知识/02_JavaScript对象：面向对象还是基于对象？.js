!function (flag) {
  if (flag) {
    var o1 = { a: 1 };
    var o2 = { a: 1 };
    console.log(o1 == o2); // false
  }
}(false)

!function (flag) {
  if (flag) {
    var o = {
      d: 1,
      f() {
        console.log(this.d);
      }
    };
  }
}(false)

!function (flag) {
  if (flag) {
    var o = { a: 1 };
    o.b = 2;
    console.log(o.a, o.b); //1 2
  }
}(false)

!function (flag) {
  if (flag) {
    var o = { a: 1 };
    o.b = 2;
    //a和b皆为数据属性
    console.log(Object.getOwnPropertyDescriptor(o, "a")) // {value: 1, writable: true, enumerable: true, configurable: true}
    console.log(Object.getOwnPropertyDescriptor(o, "b")) // {value: 2, writable: true, enumerable: true, configurable: true}
  }
}(false)

!function (flag) {
  if (flag) {
    var o = { a: 1 };
    Object.defineProperty(o, "b", { value: 2, writable: false, enumerable: false, configurable: true });
    //a和b都是数据属性，但特征值变化了
    console.log(Object.getOwnPropertyDescriptor(o, "a")) // {value: 1, writable: true, enumerable: true, configurable: true}
    console.log(Object.getOwnPropertyDescriptor(o, "b")) // {value: 2, writable: false, enumerable: false, configurable: true}
    o.b = 3;
    console.log(o.b); // 2
  }
}(false)

!function (flag) {
  if (flag) {
    var o = { get a() { return 1 } };
    console.log(o.a); // 1
  }
}(true)