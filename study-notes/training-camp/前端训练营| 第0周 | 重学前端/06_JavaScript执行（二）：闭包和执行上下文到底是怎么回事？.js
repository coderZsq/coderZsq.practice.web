{
  (function () {
    var a;
    //code
  }());


  (function () {
    var a;
    //code
  })();
}

{
  ; (function () {
    var a;
    //code
  }())


    ; (function () {
      var a;
      //code
    })()
}

{
  void function () {
    var a;
    //code
  }();
}

{
  var b;
  void function () {
    var env = { b: 1 };
    b = 2;
    console.log("In function b:", b);
    with (env) {
      var b = 3;
      console.log("In with b:", b);
    }
  }();
  console.log("Global b:", b);
  // In function b: 2
  // In with b: 3
  // Global b: undefined
}

{
  var iframe = document.createElement('iframe')
  document.documentElement.appendChild(iframe)
  iframe.src = "javascript:var b = {};"

  var b1 = iframe.contentWindow.b;
  var b2 = {};

  console.log(typeof b1, typeof b2); //object object

  console.log(b1 instanceof Object, b2 instanceof Object); //false true
}