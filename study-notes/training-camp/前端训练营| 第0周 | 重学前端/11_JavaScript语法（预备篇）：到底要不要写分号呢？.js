{
  let a = 1
  void function (a) {
    console.log(a);
  }(a);
}

{
  var a = 1, b = 1, c = 1;
  a
  ++
    b
  ++
    c

  console.log(a) // 1
  console.log(b) // 2
  console.log(c) // 2
}

{
  (function (a) {
    console.log(a);
  })();
  (function (a) {
    console.log(a);
  })()
}

{
  function f() {
    return/*
        This is a return value.
    */1;
  }
  console.log(f()); // undefined
}

{
  outer: for (var j = 0; j < 10; j++)
    for (var i = 0; i < j; i++)
      continue /*no LineTerminator here*/ outer
}

{
  outer: for (var j = 0; j < 10; j++)
    for (var i = 0; i < j; i++)
      break /*no LineTerminator here*/ outer
}

{
  function f() {
    return /*no LineTerminator here*/1;
  }
}

{
  i/*no LineTerminator here*/++
  i/*no LineTerminator here*/--
}

{
  throw/*no LineTerminator here*/new Exception("error")
}

{
  async/*no LineTerminator here*/function f() {

  }
  const f = async/*no LineTerminator here*/x => x * x
}

{
  const f = x/*no LineTerminator here*/ => x * x
}

{
  function* g() {
    var i = 0;
    while (true)
      yield/*no LineTerminator here*/i++;
  }
}

{
  var a = [[]]/*这里没有被自动插入分号*/
  [3, 2, 1, 0].forEach(e => console.log(e))
}

{
  var x = 1, g = { test: () => 0 }, b = 1/*这里没有被自动插入分号*/
    / (a) / g.test("abc")
  console.log(RegExp.$1)
}

{
  var f = function () {
    return "";
  }
  var g = f/*这里没有被自动插入分号*/
    `Template`.match(/(a)/);
  console.log(RegExp.$1)
}