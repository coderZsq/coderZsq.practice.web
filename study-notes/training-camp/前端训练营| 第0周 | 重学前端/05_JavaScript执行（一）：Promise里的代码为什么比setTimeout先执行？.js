{
  function sleep(duration) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, duration);
    })
  }
  sleep(1000).then(() => console.log("finished"));
}

{
  var r = new Promise(function (resolve, reject) {
    console.log("a");
    resolve()
  });
  r.then(() => console.log("c"));
  console.log("b")
  // a
  // b
  // c
}

{
  var r = new Promise(function (resolve, reject) {
    console.log("a");
    resolve()
  });
  setTimeout(() => console.log("d"), 0)
  r.then(() => console.log("c"));
  console.log("b")
  // a
  // b
  // c
  // d
}

{
  setTimeout(() => console.log("d"), 0)
  var r = new Promise(function (resolve, reject) {
    resolve()
  });
  r.then(() => {
    var begin = Date.now();
    while (Date.now() - begin < 1000);
    console.log("c1")
    new Promise(function (resolve, reject) {
      resolve()
    }).then(() => console.log("c2"))
  });
  // c1
  // c2
  // d
}

{
  function sleep(duration) {
    return new Promise(function (resolve, reject) {
      console.log("b");
      setTimeout(resolve, duration);
    })
  }
  console.log("a");
  sleep(5000).then(() => console.log("c"));
  // a
  // b
  // c
}

{
  function sleep(duration) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, duration);
    })
  }
  async function foo() {
    console.log("a")
    await sleep(2000)
    console.log("b")
  }
}

{
  function sleep(duration) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, duration);
    })
  }
  async function foo(name) {
    await sleep(2000)
    console.log(name)
  }
  async function foo2() {
    await foo("a");
    await foo("b");
  }
}