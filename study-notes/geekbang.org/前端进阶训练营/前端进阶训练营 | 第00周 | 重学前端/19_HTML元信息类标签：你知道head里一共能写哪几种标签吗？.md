你好，我是 winter。

我们在前面的 HTML 部分的课程中，已经学习了语义标签。这些标签涵盖了我们日常开发用到的多数标签，也是我们编写代码时最常用的一批标签。

但是我们今天要讲的标签，重要性丝毫不弱于语义类标签，这就是页面元信息类标签。

我们可以先来了解一下什么是元信息类标签。所谓元信息，是指描述自身的信息，元信息类标签，就是 HTML 用于描述文档自身的一类标签，它们通常出现在 head 标签中，一般都不会在页面被显示出来（与此相对，其它标签，如语义类标签，描述的是业务）。

元信息多数情况下是给浏览器、搜索引擎等机器阅读的，有时候这些信息会在页面之外显示给用户，有时候则不会。

元信息类标签数量不多，我在这里就逐一为你介绍一下。

### head 标签

首先我们先来了解一下 head 标签，head 标签本身并不携带任何信息，它主要是作为盛放其它语义类标签的容器使用。

head 标签规定了自身必须是 html 标签中的第一个标签，它的内容必须包含一个 title，并且最多只能包含一个 base。如果文档作为 iframe，或者有其他方式指定了文档标题时，可以允许不包含 title 标签。

### title 标签

title 标签表示文档的标题，从字面上就非常容易理解。这里我就讲讲需要注意的地方。

你还记得吗，我们的语义类标签中也有一组表示标题的标签：h1-h6。

heading 和 title 两个英文单词意义区分十分微妙，在中文中更是找不到对应的词汇来区分。但是实际使用中，两者确实有一定区别。

在 HTML 标准中，特意讨论了这个问题。我们思考一下，假设有一个介绍蜜蜂跳舞求偶仪式的科普页面，我们试着把以下两个文字分别对应到 title 和 h1。

- 蜜蜂求偶仪式舞蹈
- 舞蹈

在听 / 看正确答案前，你不妨先想想，自己的答案是什么呢？为什么？

好了，思考之后，我们来看看正确答案。正确答案是“蜜蜂求偶仪式舞蹈”放入 title，“舞蹈”放入 h1。

我来讲一讲为什么要这样放呢？这主要是考虑到 title 作为元信息，可能会被用在浏览器收藏夹、微信推送卡片、微博等各种场景，这时侯往往是上下文缺失的，所以 title 应该是完整地概括整个网页内容的。

而 h1 则仅仅用于页面展示，它可以默认具有上下文，并且有链接辅助，所以可以简写，即便无法概括全文，也不会有很大的影响。

### base 标签

base 标签实际上是个历史遗留标签。它的作用是给页面上所有的 URL 相对地址提供一个基础。

base 标签最多只有一个，它改变全局的链接地址，它是一个非常危险的标签，容易造成跟 JavaScript 的配合问题，所以在实际开发中，我比较建议你使用 JavaScript 来代替 base 标签。

### meta 标签

meta 标签是一组键值对，它是一种通用的元信息表示标签。

在 head 中可以出现任意多个 meta 标签。一般的 meta 标签由 name 和 content 两个属性来定义。name 表示元信息的名，content 则用于表示元信息的值。

它基本用法是下面这样的，你也可以自己动手尝试一下：

```html
  <meta name=application-name content="lsForums">
```

这个标签表示页面所在的 web-application，名为 IsForums。

这里的 name 是一种比较自由的约定，HTTP 标准规定了一些 name 作为大家使用的共识，也鼓励大家发明自己的 name 来使用。

除了基本用法，meta 标签还有一些变体，主要用于简化书写方式或者声明自动化行为。下面我就挑几种重点的内容来分别讲解一下。

### 具有 charset 属性的 meta

从 HTML5 开始，为了简化写法，meta 标签新增了 charset 属性。添加了 charset 属性的 meta 标签无需再有 name 和 content。

```html
  <meta charset="UTF-8" >
```

charset 型 meta 标签非常关键，它描述了 HTML 文档自身的编码形式。因此，我建议这个标签放在 head 的第一个。

```html
<html>
<head>
<meta charset="UTF-8">
……
```

这样，浏览器读到这个标签之前，处理的所有字符都是 ASCII 字符，众所周知，ASCII 字符是 UTF-8 和绝大多数字符编码的子集，所以，在读到 meta 之前，浏览器把文档理解多数编码格式都不会出错，这样可以最大限度地保证不出现乱码。

一般情况下，HTTP 服务端会通过 http 头来指定正确的编码方式，但是有些特殊的情况如使用 file 协议打开一个 HTML 文件，则没有 http 头，这种时候，charset meta 就非常重要了。

### 具有 http-equiv 属性的 meta

具有 http-equiv 属性的 meta 标签，表示执行一个命令，这样的 meta 标签可以不需要 name 属性了。

例如，下面一段代码，相当于添加了 content-type 这个 http 头，并且指定了 http 编码方式。

```html
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
```

除了 content-type，还有以下几种命令：
- content-language 指定内容的语言；
- default-style 指定默认样式表；
- refresh 刷新；
- set-cookie 模拟 http 头 set-cookie，设置 cookie；
- x-ua-compatible 模拟 http 头 x-ua-compatible，声明 ua 兼容性；
- content-security-policy 模拟 http 头 content-security-policy，声明内容安全策略。

### name 为 viewport 的 meta

实际上，meta 标签可以被自由定义，只要写入和读取的双方约定好 name 和 content 的格式就可以了。

我们来介绍一个 meta 类型，它没有在 HTML 标准中定义，却是移动端开发的事实标准：它就是 name 为 viewport 的 meta。

这类 meta 的 name 属性为 viewport，它的 content 是一个复杂结构，是用逗号分隔的键值对，键值对的格式是 key=value。

例如：

```html
<meta name="viewport" content="width=500, initial-scale=1">
```

这里只指定了两个属性，宽度和缩放，实际上 viewport 能控制的更多，它能表示的全部属性如下：

- width：页面宽度，可以取值具体的数字，也可以是 device-width，表示跟设备宽度相等。
- height：页面高度，可以取值具体的数字，也可以是 device-height，表示跟设备高度相等。
- initial-scale：初始缩放比例。
- minimum-scale：最小缩放比例。
- maximum-scale：最大缩放比例。
- user-scalable：是否允许用户缩放。

对于已经做好了移动端适配的网页，应该把用户缩放功能禁止掉，宽度设为设备宽度，一个标准的 meta 如下：

```html
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
```

### 其它预定义的 meta

在 HTML 标准中，还定义了一批 meta 标签的 name，可以视为一种有约定的 meta，我在这里列出来，你可以简单了解一下。

application-name：如果页面是 Web application，用这个标签表示应用名称。

- author: 页面作者。
- description：页面描述，这个属性可能被用于搜索引擎或者其它场合。
- generator: 生成页面所使用的工具，主要用于可视化编辑器，如果是手写 HTML 的网页，不需要加这个 meta。
- keywords: 页面关键字，对于 SEO 场景非常关键。
- referrer: 跳转策略，是一种安全考量。
- theme-color: 页面风格颜色，实际并不会影响页面，但是浏览器可能据此调整页面之外的 UI（如窗口边框或者 tab 的颜色）。

### 结语

在本课，我们又学习了一批标签，它们是文档用于描述自身的元信息类标签。一些元信息标签可以产生实际的行为，掌握它们对于我们编写代码是必须的。

另一些元信息仅仅是对页面的描述，掌握它们可以使我们编写的页面跟各种浏览器、搜索引擎等结合地更好。

主要包括下面这些内容。
- head：元信息的容器。
- title：文档标题。
- base：页面的基准 URL。
- meta: 元信息通用标签。

我们还展开介绍了几种重要的 meta 标签，charset 表示页面编码，http-equiv 表示命令，还介绍了一些有约定的 meta 名称。

最后，给你留一个问题，你还见过哪些 meta 标签的用法？欢迎留言告诉我。