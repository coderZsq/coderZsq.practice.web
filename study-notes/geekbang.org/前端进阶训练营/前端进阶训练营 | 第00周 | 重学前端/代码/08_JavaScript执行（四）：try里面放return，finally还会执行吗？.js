{
  function foo() {
    try {
      return 0;
    } catch (err) {

    } finally {
      console.log("a")
    }
  }

  console.log(foo());
  // a
  // 0
}

{
  function foo() {
    try {
      return 0;
    } catch (err) {

    } finally {
      return 1;
    }
  }

  console.log(foo());
  // 1
}

{
  {
    var i = 1; // normal, empty, empty
    i++; // normal, 1, empty
    console.log(i) //normal, undefined, empty
  } // normal, undefined, empty 
}

{
  {
    var i = 1; // normal, empty, empty
    return i; // return, 1, empty
    i++;
    console.log(i)
  } // return, 1, empty
}

{
  firstStatement: var i = 1;
}

{
  outer: while (true) {
    inner: while (true) {
      break outer;
    }
  }
  console.log("finished")
}