// import './b.js';
{
  var a = 1;

  function foo() {
    console.log(a);
    var a = 2;
  }

  foo();
}

{
  var a = 1;

  function foo() {
    console.log(a);
    if (false) {
      var a = 2;
    }
  }

  foo();
}

{
  var a = 1;

  function foo() {
    var o = { a: 3 }
    with (o) {
      var a = 2;
    }
    console.log(o.a);
    console.log(a);
  }

  foo();
}

{
  for (var i = 0; i < 20; i++) {
    void function (i) {
      var div = document.createElement("div");
      div.innerHTML = i;
      div.onclick = function () {
        console.log(i);
      }
      document.body.appendChild(div);
    }(i);
  }
}

{
  console.log(foo); // [Function: foo]
  function foo() {

  }
}

{
  console.log(foo); // 浏览器环境 undefined, Node环境报错
  if (true) {
    function foo() {

    }
  }
}

{
  // Uncaught ReferenceError: Cannot access 'c' before initialization

  // console.log(c);
  // class c {

  // }
}

{
  // var c = 1;
  // function foo() {
  //   console.log(c);
  //   class c { }
  // }
  // foo();
}

{
  "use strict";
  function f() {
    console.log(this); // null
  };
  f.call(null);
}