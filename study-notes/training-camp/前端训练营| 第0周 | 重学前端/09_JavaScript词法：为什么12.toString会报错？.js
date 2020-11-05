{
  console.log(12 .toString())
}

{
  function f() {
    console.log(arguments);
  }

  var a = "world"
  f`Hello ${a}!`; // [["Hello", "!"], world]
}
