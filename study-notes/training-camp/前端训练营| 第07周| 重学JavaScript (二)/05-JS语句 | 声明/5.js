{
  var a = 2;
  void function () {
    a = 1;
    return;
    var a;
  }();
  console.log(a); // 2
}

{
  var a = 2;
  void function () {
    a = 1;
    return;
    const a; // SyntaxError: Missing initializer in const declaration
  }();
  console.log(2);
}

{
  var a = 2;
  void function () {
    a = 1;
    {
      var a;
    }
  }();
  console.log(a); // 2
}

{
  var a = 2;
  void function () {
    a = 1;
    {
      const a; // SyntaxError: Missing initializer in const declaration
    }
  }();
  console.log(a);
}