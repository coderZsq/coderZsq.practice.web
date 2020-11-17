{
  let a = 100
  while (a--) {
    console.log("*");
  }
}

{
  let a = 101;
  do {
    console.log(a);
  } while (a < 100)
}

{
  for (i = 0; i < 100; i++)
    console.log(i);

  for (var i = 0; i < 100; i++)
    console.log(i);

  for (let i = 0; i < 100; i++)
    console.log(i);

  var j = 0;
  for (const i = 0; j < 100; j++)
    console.log(i);
}

{
  let o = { a: 10, b: 20 }
  Object.defineProperty(o, "c", { enumerable: false, value: 30 })

  for (let p in o)
    console.log(p);
}

{
  for (let e of [1, 2, 3, 4, 5])
    console.log(e);
}

{
  let o = {
    [Symbol.iterator]: () => ({
      _value: 0,
      next() {
        if (this._value == 10)
          return {
            done: true
          }
        else return {
          value: this._value++,
          done: false
        };
      }
    })
  }
  for (let e of o)
    console.log(e);
}

{
  function* foo() {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
  }
  for (let e of foo())
    console.log(e);
}

{
  // function sleep(duration) {
  //   return new Promise(function (resolve, reject) {
  //     setTimeout(resolve, duration);
  //   })
  // }
  // async function* foo() {
  //   i = 0;
  //   while (true) {
  //     await sleep(1000);
  //     yield i++;
  //   }

  // }
  // for await (let e of foo())
  //   console.log(e);
}

{
  outer: for (let i = 0; i < 100; i++)
    inner: for (let j = 0; j < 100; j++)
      if (i == 50 && j == 50)
        break outer;
  outer: for (let i = 0; i < 100; i++)
    inner: for (let j = 0; j < 100; j++)
      if (i >= 50 && j == 50)
        continue outer;
}

{
  const a = 2;
  if (true) {
    const a = 1;
    console.log(a);
  }
  console.log(a);
}

{
  // const a = 2;
  // if (true) {
  //   console.log(a); //抛错
  //   const a = 1;
  // }
}