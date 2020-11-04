你好，我是 winter。

在前面几篇文章中，我们已经了解了关于执行上下文、作用域、闭包之间的关系。

今天，我们则要说一说更为细节的部分：语句。

语句是任何编程语言的基础结构，与 JavaScript 对象一样，JavaScript 语句同样具有“看起来很像其它语言，但是其实一点都不一样”的特点。

我们比较常见的语句包括变量声明、表达式、条件、循环等，这些都是大家非常熟悉的东西，对于它们的行为，我在这里就不赘述了。

为了了解 JavaScript 语句有哪些特别之处，首先我们要看一个不太常见的例子，我会通过这个例子，来向你介绍 JavaScript 语句执行机制涉及的一种基础类型：Completion 类型。

Completion 类型

我们来看一个例子。在函数 foo 中，使用了一组 try 语句。我们可以先来做一个小实验，在 try 中有 return 语句，finally 中的内容还会执行吗？我们来看一段代码。

```js
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
```

通过实际试验，我们可以看到，finally 确实执行了，而且 return 语句也生效了，foo() 返回了结果 0。

虽然 return 执行了，但是函数并没有立即返回，又执行了 finally 里面的内容，这样的行为违背了很多人的直觉。

如果在这个例子中，我们在 finally 中加入 return 语句，会发生什么呢？

```js
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
```

通过实际执行，我们看到，finally 中的 return “覆盖”了 try 中的 return。在一个函数中执行了两次 return，这已经超出了很多人的常识，也是其它语言中不会出现的一种行为。

面对如此怪异的行为，我们当然可以把它作为一个孤立的知识去记忆，但是实际上，这背后有一套机制在运作。

这一机制的基础正是 JavaScript 语句执行的完成状态，我们用一个标准类型来表示：Completion Record（我在类型一节提到过，Completion Record 用于描述异常、跳出等语句执行过程）。

Completion Record 表示一个语句执行完之后的结果，它有三个字段：
- [[type]] 表示完成的类型，有 break continue return throw 和 normal 几种类型；
- [[value]] 表示语句的返回值，如果语句没有，则是 empty；
- [[target]] 表示语句的目标，通常是一个 JavaScript 标签（标签在后文会有介绍）。

JavaScript 正是依靠语句的 Completion Record 类型，方才可以在语句的复杂嵌套结构中，实现各种控制。接下来我们要来了解一下 JavaScript 使用 Completion Record 类型，控制语句执行的过程。

首先我们来看看语句有几种分类。

![](https://static001.geekbang.org/resource/image/98/d5/98ce53be306344c018cddd6c083392d5.jpg)

普通的语句在 JavaScript 中，我们把不带控制能力的语句称为普通语句。普通语句有下面几种。

- 声明类语句
  - var 声明
  - const 声明
  - let 声明
  - 函数声明
  - 类声明
- 表达式语句
- 空语句
- debugger 语句

这些语句在执行时，从前到后顺次执行（我们这里先忽略 var 和函数声明的预处理机制），没有任何分支或者重复执行逻辑。

普通语句执行后，会得到 [[type]] 为 normal 的 Completion Record，JavaScript 引擎遇到这样的 Completion Record，会继续执行下一条语句。

这些语句中，只有表达式语句会产生 [[value]]，当然，从引擎控制的角度，这个 value 并没有什么用处。

如果你经常使用 Chrome 自带的调试工具，可以知道，输入一个表达式，在控制台可以得到结果，但是在前面加上 var，就变成了 undefined。

![](https://static001.geekbang.org/resource/image/a3/67/a35801b1b82654d17e413e51b340d767.png)

Chrome 控制台显示的正是语句的 Completion Record 的[[value]]。

### 语句块

介绍完了普通语句，我们再来介绍一个比较特殊的语句：语句块。

语句块就是拿大括号括起来的一组语句，它是一种语句的复合结构，可以嵌套。

语句块本身并不复杂，我们需要注意的是语句块内部的语句的 Completion Record 的[[type]] 如果不为 normal，会打断语句块后续的语句执行。

比如我们考虑，一个[[type]]为 return 的语句，出现在一个语句块中的情况。

从语句的这个 type 中，我们大概可以猜到它由哪些特定语句产生，我们就来说说最开始的例子中的 return。

return 语句可能产生 return 或者 throw 类型的 Completion Record。

我们来看一个例子。先给出一个内部为普通语句的语句块：

```js
  {
    var i = 1; // normal, empty, empty
    i++; // normal, 1, empty
    console.log(i) //normal, undefined, empty
  } // normal, undefined, empty 
```

在每一行的注释中，我给出了语句的 Completion Record

我们看到，在一个 block 中，如果每一个语句都是 normal 类型，那么它会顺次执行。接下来我们加入 return 试试看。

```js
  {
    var i = 1; // normal, empty, empty
    return i; // return, 1, empty
    i++;
    console.log(i)
  } // return, 1, empty
```

但是假如我们在 block 中插入了一条 return 语句，产生了一个非 normal 记录，那么整个 block 会成为非 normal。这个结构就保证了非 normal 的完成类型可以穿透复杂的语句嵌套结构，产生控制效果。

接下来我们就具体讲讲控制类语句。