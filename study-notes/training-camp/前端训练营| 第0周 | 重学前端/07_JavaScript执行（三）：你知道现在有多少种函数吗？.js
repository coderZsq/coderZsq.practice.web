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