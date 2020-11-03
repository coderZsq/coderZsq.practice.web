在前一篇文章中，我们大致了解了执行上下文是什么，也知道了任何语句的执行都会依赖特定的上下文。

一旦上下文被切换，整个语句的效果可能都会发生改变。那么，切换上下文的时机就显得非常重要了。

在 JavaScript，切换上下文最主要的场景是函数调用。在这一课，我们就来讲讲函数调用切换上下文的事情。我们在讲函数调用之前，首先来认识一下函数家族。

函数

在 ES2018 中，函数已经是一个很复杂的体系了，我在这里整理了一下。

**第一种，普通函数：用 function 关键字定义的函数。**

示例：

```js
  function foo(){
      // code
  }
```

**第二种，箭头函数：用 => 运算符定义的函数。**

示例:

```js
  const foo = () => {
    // code
  }
```

**第三种，方法：在 class 中定义的函数。**

示例:

```js
  class C {
    foo() {
      //code
    }
  }
```

**第四种，生成器函数：用 function * 定义的函数。**

示例：

```js
  function* foo() {
    // code
  }
```

**第五种，类：用 class 定义的类，实际上也是函数。**

示例：

```js
  class Foo {
      constructor(){
          //code
      }
  }
```

**第六 / 七 / 八种，异步函数：普通函数、箭头函数和生成器函数加上 async 关键字。**

示例：

```js
  async function foo() {
    // code
  }
  const foo = async () => {
    // code
  }
  async function* foo (){
    // code
  }
```

ES6 以来，大量加入的新语法极大地方便了我们编程的同时，也增加了很多我们理解的心智负担。要想认识这些函数的执行上下文切换，我们必须要对它们行为上的区别有所了解。

对普通变量而言，这些函数并没有本质区别，都是遵循了“继承定义时环境”的规则，它们的一个行为差异在于 this 关键字。

那么，this 关键字是什么呢，我们一起来看一看。

### this 关键字的行为

this 是 JavaScript 中的一个关键字，它的使用方法类似于一个变量（但是 this 跟变量的行为有很多不同，上一节课我们讲了一些普通变量的行为和机制，也就是 var 声明和赋值、let 的内容）。

**this 是执行上下文中很重要的一个组成部分。同一个函数调用方式不同，得到的 this 值也不同**，我们看一个例子：

```js
  function showThis() {
    console.log(this);
  }

  var o = {
    showThis: showThis
  }

  showThis(); // global
  o.showThis(); // o
  // Object [global] {
  //   global: [Circular],
  //   clearInterval: [Function: clearInterval],
  //   clearTimeout: [Function: clearTimeout],
  //   setInterval: [Function: setInterval],
  //   setTimeout: [Function: setTimeout] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Function]
  //   },
  //   queueMicrotask: [Function: queueMicrotask],
  //   clearImmediate: [Function: clearImmediate],
  //   setImmediate: [Function: setImmediate] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Function]
  //   }
  // }
  // { showThis: [Function: showThis] }
```

在这个例子中，我们定义了函数 showThis，我们把它赋值给一个对象 o 的属性，然后尝试分别使用两个引用来调用同一个函数，结果得到了不同的 this 值。

普通函数的 this 值由“调用它所使用的引用”决定，其中奥秘就在于：我们获取函数的表达式，它实际上返回的并非函数本身，而是一个 Reference 类型（记得我们在类型一章讲过七种标准类型吗，正是其中之一）。

Reference 类型由两部分组成：一个对象和一个属性值。不难理解 o.showThis 产生的 Reference 类型，即由对象 o 和属性“showThis”构成。

当做一些算术运算（或者其他运算时），Reference 类型会被解引用，即获取真正的值（被引用的内容）来参与运算，而类似函数调用、delete 等操作，都需要用到 Reference 类型中的对象。

在这个例子中，Reference 类型中的对象被当作 this 值，传入了执行函数时的上下文当中。

至此，我们对 this 的解释已经非常清晰了：调用函数时使用的引用，决定了函数执行时刻的 this 值。

实际上从运行时的角度来看，this 跟面向对象毫无关联，它是与函数调用时使用的表达式相关。

这个设计来自 JavaScript 早年，通过这样的方式，巧妙地模仿了 Java 的语法，但是仍然保持了纯粹的“无类”运行时设施。

如果，我们把这个例子稍作修改，换成箭头函数，结果就不一样了：

```js
  const showThis = () => {
    console.log(this);
  }

  var o = {
    showThis: showThis
  }

  showThis(); // global
  o.showThis(); // global
```

**我们看到，改为箭头函数后，不论用什么引用来调用它，都不影响它的 this 值。**

接下来我们看看“方法”，它的行为又不一样了：

```js
  class C {
    showThis() {
      console.log(this);
    }
  }
  var o = new C();
  var showThis = o.showThis;

  showThis(); // undefined
  o.showThis(); // o
```

这里我们创建了一个类 C，并且实例化出对象 o，再把 o 的方法赋值给了变量 showThis。

这时候，我们使用 showThis 这个引用去调用方法时，得到了 undefined。

所以，在方法中，我们看到 this 的行为也不太一样，它得到了 undefined 的结果。按照我们上面的方法，不难验证出：生成器函数、异步生成器函数和异步普通函数跟普通函数行为是一致的，异步箭头函数与箭头函数行为是一致的。