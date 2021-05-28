{
  var cat = {
    say() {
      console.log("meow~");
    },
    jump() {
      console.log("jump");
    }
  }
  var tiger = Object.create(cat, {
    say: {
      writable: true,
      configurable: true,
      enumerable: true,
      value: function () {
        console.log("roar!");
      }
    }
  })
  var anotherCat = Object.create(cat);
  anotherCat.say();

  var anotherTiger = Object.create(tiger);
  anotherTiger.say();
}

{
  var o = new Object;
  var n = new Number;
  var s = new String;
  var b = new Boolean;
  var d = new Date;
  var arg = function () { return arguments }();
  var r = new RegExp;
  var f = new Function;
  var arr = new Array;
  var e = new Error;
  console.log([o, n, s, b, d, arg, r, f, arr, e].map(v => Object.prototype.toString.call(v)));
  // [
  //   '[object Object]',
  //   '[object Number]',
  //   '[object String]',
  //   '[object Boolean]',
  //   '[object Date]',
  //   '[object Arguments]',
  //   '[object RegExp]',
  //   '[object Function]',
  //   '[object Array]',
  //   '[object Error]'
  // ]
}

{
  var o = { [Symbol.toStringTag]: "MyObject" }
  console.log(o + "");
  // [object MyObject]
}

{
  function c1() {
    this.p1 = 1;
    this.p2 = function () {
      console.log(this.p1);
    }
  }
  var o1 = new c1;
  o1.p2();

  function c2() {
  }
  c2.prototype.p1 = 1;
  c2.prototype.p2 = function () {
    console.log(this.p1);
  }

  var o2 = new c2;
  o2.p2();
}

{
  Object.create = function (prototype) {
    var cls = function () { }
    cls.prototype = prototype;
    return new cls;
  }
}

{
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
}

{
  class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }

  class Dog extends Animal {
    constructor(name) {
      super(name); // call the super class constructor and pass in the name parameter
    }

    speak() {
      console.log(this.name + ' barks.');
    }
  }

  let d = new Dog('Mitzie');
  d.speak(); // Mitzie barks.
}
