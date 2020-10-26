!function (flag) {
  if (flag) {

  }
}(true)

!function (flag) {
  if (flag) {
    const undefined = 123
    console.log(undefined)
    console.log(void 0)
  }
}(false)

!function (flag) {
  if (flag) {
    console.log(1 / 0)
    console.log(1 / +0)
    console.log(1 / -0)
  }
}(false)

!function (flag) {
  if (flag) {
    console.log(0.1 + 0.2 == 0.3)
  }
}(false)

!function (flag) {
  if (flag) {
    console.log(Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);
  }
}(false)

!function (flag) {
  if (flag) {
    var mySymbol = Symbol('my symbol')

    var o = new Object

    o[Symbol.iterator] = function () {
      var v = 0
      return {
        next: function () {
          return { value: v++, done: v > 10 }
        }
      }
    }

    for (var v of o)
      console.log(v); // 0 1 2 3 ... 9
  }
}(false)

!function (flag) {
  if (flag) {
    console.log(typeof 3)
    console.log(typeof Number(3))
    console.log(typeof new Number(3))
    console.log(3 === Number(3))
    console.log(3 == Number(3))
    console.log(3 === new Number(3))
    console.log(3 == new Number(3))
  }
}(false)

!function (flag) {
  if (flag) {
    console.log('abc'.charAt(0)) //a
  }
}(false)

!function (flag) {
  if (flag) {
    Symbol.prototype.hello = () => console.log('hello')

    var a = Symbol('a')
    console.log(typeof a); //symbol，a并非对象
    a.hello(); //hello，有效
  }
}(false)

!function (flag) {
  if (flag) {
    console.log(parseInt('30'))
    console.log(parseFloat('30'))
    console.log(Number('30'))

    console.log(parseInt('0b111'))
    console.log(parseFloat('0b111'))
    console.log(Number('0b111'))

    console.log(parseInt('0o13'))
    console.log(parseFloat('0o13'))
    console.log(Number('0o13'))

    console.log(parseInt('0xFF'))
    console.log(parseFloat('0xFF'))
    console.log(Number('0xFF'))

    console.log(parseInt('1e3'))
    console.log(parseFloat('1e3'))
    console.log(Number('1e3'))

    console.log(parseInt('-1e-2'))
    console.log(parseFloat('-1e-2'))
    console.log(Number('-1e-2'))
  }
}(false)

!function (flag) {
  if (flag) {
    var symbolObject = (
      function () {
        return this;
      }
    ).call(Symbol("a"));

    console.log(typeof symbolObject); //object
    console.log(symbolObject instanceof Symbol); //true
    console.log(symbolObject.constructor == Symbol); //true
  }
}(false)

!function (flag) {
  if (flag) {
    var symbolObject = Object(Symbol("a"));

    console.log(typeof symbolObject); //object
    console.log(symbolObject instanceof Symbol); //true
    console.log(symbolObject.constructor == Symbol); //true
  }
}(false)

!function (flag) {
  if (flag) {
    var symbolObject = Object(Symbol("a"));

    console.log(Object.prototype.toString.call(symbolObject)); //[object Symbol]
  }
}(false)

!function (flag) {
  if (flag) {
    var o = {
      valueOf: () => {
        console.log("valueOf"); return {}
      },
      toString: () => { console.log("toString"); return {} }
    }

    o * 2
    // valueOf
    // toString
    // TypeError
  }
}(false)

!function (flag) {
  if (flag) {
    var o = {
      valueOf: () => { console.log("valueOf"); return {} },
      toString: () => { console.log("toString"); return {} }
    }

    String(o)
    // toString
    // valueOf
    // TypeError
  }
}(false)

!function (flag) {
  if (flag) {
    var o = {
      valueOf: () => { console.log("valueOf"); return {} },
      toString: () => { console.log("toString"); return {} }
    }

    o[Symbol.toPrimitive] = () => { console.log("toPrimitive"); return "hello" }


    console.log(o + "")
    // toPrimitive
    // hello
  }
}(true)