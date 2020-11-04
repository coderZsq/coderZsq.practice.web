{
  function foo() {
    // code
  }
}

{
  const foo = () => {
    // code
  }
}

{
  class C {
    foo() {
      //code
    }
  }
}

{
  function* foo() {
    // code
  }
}

{
  class Foo {
    constructor() {
      //code
    }
  }
}

{
  async function foo() {
    // code
  }
}

{
  const foo = async () => {
    // code
  }
}

{
  async function* foo() {
    // code
  }
}

{
  function showThis() {
    console.log(this);
  }

  var o = {
    showThis: showThis
  }

  showThis(); // global
  o.showThis(); // o
  // Object [global] {
  //   global: [Circular],
  //   clearInterval: [Function: clearInterval],
  //   clearTimeout: [Function: clearTimeout],
  //   setInterval: [Function: setInterval],
  //   setTimeout: [Function: setTimeout] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Function]
  //   },
  //   queueMicrotask: [Function: queueMicrotask],
  //   clearImmediate: [Function: clearImmediate],
  //   setImmediate: [Function: setImmediate] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Function]
  //   }
  // }
  // { showThis: [Function: showThis] }
}

{
  const showThis = () => {
    console.log(this);
  }

  var o = {
    showThis: showThis
  }

  showThis(); // global
  o.showThis(); // global
}

{
  class C {
    showThis() {
      console.log(this);
    }
  }
  var o = new C();
  var showThis = o.showThis;

  showThis(); // undefined
  o.showThis(); // o
}

{
  var a = 1;
  foo();

  // 在别处定义了foo：

  var b = 2;
  function foo() {
    console.log(b); // 2
    console.log(a); // error
  }
}

{
  "use strict"
  function showThis() {
    console.log(this);
  }

  var o = {
    showThis: showThis
  }

  showThis(); // undefined
  o.showThis(); // o
}

{
  var o = {}
  o.foo = function foo() {
    console.log(this);
    return () => {
      console.log(this);
      return () => console.log(this);
    }
  }

  o.foo()()(); // o, o, o
}

{
  function foo(a, b, c) {
    console.log(this);
    console.log(a, b, c);
  }
  foo.call({}, 1, 2, 3);
  foo.apply({}, [1, 2, 3]);
}

{
  function foo(a, b, c) {
    console.log(this);
    console.log(a, b, c);
  }
  foo.bind({}, 1, 2, 3)();
}