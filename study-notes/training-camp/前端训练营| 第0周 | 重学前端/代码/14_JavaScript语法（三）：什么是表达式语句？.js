{
  class Cls {
    constructor(n) {
      console.log("cls", n);
      return class {
        constructor(n) {
          console.log("returned", n);
        }
      }
    }
  }

  new (new Cls(1));
}

{
  function Cls(n) {
    console.log('cls', n);
    return function (n) {
      console.log('returned', n);
    }
  }
  new new Cls(1)
}