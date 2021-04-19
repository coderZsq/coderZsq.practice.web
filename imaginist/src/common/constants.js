export const HOME_ARTICLES_SIZE = 3;

export const EDITOR_STORAGE = 'editor-storage';

export const MARKDOWN_PLACEHOLDER_PREVIEW =
  '<h1 id="以-开头写在第一行-会默认被识别成标题。">以# 开头写在第一行, 会默认被识别成标题。</h1>\n' +
  '<blockquote>\n' +
  '<p>以下用一段教程来引导您快速灵活掌握先进的 MarkDown 语法。</p>\n' +
  '</blockquote>\n' +
  '<h2 id="正文">正文</h2>\n' +
  '<h3 id="1-markdown是什么？">1. Markdown<em>是什么</em>？</h3>\n' +
  '<p><strong>Markdown</strong>是一种轻量级<strong>标记语言</strong>，它以纯文本形式( <em>易读、易写、易更改</em> )编写文档，并最终以 HTML 格式发布。<br><strong>Markdown</strong>也可以理解为将以 MARKDOWN 语法编写的语言转换成 HTML 内容的工具。</p>\n' +
  '<h3 id="2-谁创造了它？">2. <em>谁</em>创造了它？</h3>\n' +
  '<p>它由<a href="http://www.aaronsw.com/"><strong>Aaron Swartz</strong></a>和<strong>John Gruber</strong>共同设计，<strong>Aaron Swartz</strong>就是那位（ <em>2013 年 1 月 11 日</em> ）自杀,有着<strong>开挂</strong>一般人生经历的程序员。维基百科对他的<a href="http://zh.wikipedia.org/wiki/%E4%BA%9A%E4%BC%A6%C2%B7%E6%96%AF%E6%B2%83%E8%8C%A8">介绍</a>是：<strong>软件工程师、作家、政治组织者、互联网活动家、维基百科人</strong>。</p>\n' +
  '<p>他有着足以让你跪拜的人生经历：</p>\n' +
  '<ul>\n' +
  '<li><strong>14 岁</strong>参与 RSS 1.0 规格标准的制订。</li>\n' +
  '<li><strong>2004</strong>年入读<strong>斯坦福</strong>，之后退学。</li>\n' +
  '<li><strong>2005</strong>年创建<a href="http://infogami.org/">Infogami</a>，之后与<a href="http://www.reddit.com/">Reddit</a>合并成为其合伙人。</li>\n' +
  '<li><strong>2010</strong>年创立求进会（Demand Progress），积极参与禁止网络盗版法案（SOPA）活动，最终该提案被撤回。</li>\n' +
  '<li><strong>2011</strong>年 7 月 19 日，因被控从 MIT 和 JSTOR 下载 480 万篇学术论文并以免费形式上传于网络被捕。</li>\n' +
  '<li><strong>2013</strong>年 1 月自杀身亡。</li>\n' +
  '</ul>\n' +
  '<p><img src="https://s3.ifanr.com/wp-content/uploads/2013/06/Aaron_Swartz.jpg!720" alt="Aaron Swartz"></p>\n' +
  '<p>天才都有早逝的归途。</p>\n' +
  '<h3 id="3-为什么要使用它？">3. <em>为什么</em>要使用它？</h3>\n' +
  '<ul>\n' +
  '<li>它是易读（看起来舒服）、易写（语法简单）、易更改<strong>纯文本</strong>。处处体现着<strong>极简主义</strong>的影子。</li>\n' +
  '<li>兼容 HTML，可以转换为 HTML 格式发布。</li>\n' +
  '<li>跨平台使用。</li>\n' +
  '<li>越来越多的网站支持 Markdown。</li>\n' +
  '<li>更方便清晰地组织你的电子邮件。（Markdown-here, Airmail）</li>\n' +
  '<li>摆脱 Word（我不是认真的）。</li>\n' +
  '</ul>\n' +
  '<h3 id="4-怎么使用？">4. <em>怎么</em>使用？</h3>\n' +
  '<p>如果不算<strong>扩展</strong>，Markdown 的语法绝对<strong>简单</strong>到让你爱不释手。</p>\n' +
  '<p>Markdown 语法主要分为如下几大部分：\n' +
  '<strong>标题</strong>，<strong>段落</strong>，<strong>区块引用</strong>，<strong>代码区块</strong>，<strong>强调</strong>，<strong>列表</strong>，<strong>分割线</strong>，<strong>链接</strong>，<strong>图片</strong>，**反斜杠 <code>\\</code><strong>，</strong>符号&#39;`&#39;**。</p>\n' +
  '<h4 id="41-标题">4.1 标题</h4>\n' +
  '<p>两种形式：<br>1）使用<code>=</code>和<code>-</code>标记一级和二级标题。</p>\n' +
  '<blockquote>\n' +
  '<h1 id="一级标题">一级标题  </h1>\n' +
  '<h2 id="二级标题">二级标题  </h2>\n' +
  '</blockquote>\n' +
  '<p>2）使用<code>#</code>，可表示 1-6 级标题。</p>\n' +
  '<blockquote>\n' +
  '<h1 id="一级标题-1">一级标题</h1>\n' +
  '<h2 id="二级标题-1">二级标题</h2>\n' +
  '<h3 id="三级标题">三级标题</h3>\n' +
  '<h4 id="四级标题">四级标题</h4>\n' +
  '<h5 id="五级标题">五级标题</h5>\n' +
  '<h6 id="六级标题">六级标题</h6>\n' +
  '</blockquote>\n' +
  '<h4 id="42-段落">4.2 段落</h4>\n' +
  '<p>段落的前后要有空行，所谓的空行是指没有文字内容。若想在段内强制换行的方式是使用<strong>两个以上</strong>空格加上回车（引用中换行省略回车）。</p>\n' +
  '<h4 id="43-区块引用">4.3 区块引用</h4>\n' +
  '<p>在段落的每行或者只在第一行使用符号<code>&gt;</code>,还可使用多个嵌套引用，如：</p>\n' +
  '<blockquote>\n' +
  '<blockquote>\n' +
  '<p>区块引用  </p>\n' +
  '<blockquote>\n' +
  '<p>嵌套引用</p>\n' +
  '</blockquote>\n' +
  '</blockquote>\n' +
  '</blockquote>\n' +
  '<h4 id="44-代码区块">4.4 代码区块</h4>\n' +
  '<p>代码区块的建立是在每行加上 4 个空格或者一个制表符（如同写代码一样）。如<br>普通段落：</p>\n' +
  '<p>void main()<br>{<br> printf(&quot;Hello, Markdown.&quot;);<br>}</p>\n' +
  '<p>代码区块：</p>\n' +
  '<pre><code>void main()\n' +
  '{\n' +
  '    printf(&quot;Hello, Markdown.&quot;);\n' +
  '}\n' +
  '</code></pre>\n' +
  '<p><strong>注意</strong>:需要和普通段落之间存在空行。</p>\n' +
  '<h4 id="45-强调">4.5 强调</h4>\n' +
  '<p>在强调内容两侧分别加上<code>*</code>或者<code>_</code>，如：</p>\n' +
  '<blockquote>\n' +
  '<p><em>斜体</em>，<em>斜体</em><br><strong>粗体</strong>，<strong>粗体</strong></p>\n' +
  '</blockquote>\n' +
  '<h4 id="46-列表">4.6 列表</h4>\n' +
  '<p>使用<code>·</code>、<code>+</code>、或<code>-</code>标记无序列表，如：</p>\n' +
  '<p><strong>注意</strong>：标记后面最少有一个<em>空格</em>或<em>制表符</em>。若不在引用区块中，必须和前方段落之间存在空行。</p>\n' +
  '<blockquote>\n' +
  '<ul>\n' +
  '<li>第一项</li>\n' +
  '<li>第二项</li>\n' +
  '<li>第三项</li>\n' +
  '</ul>\n' +
  '</blockquote>\n' +
  '<p>有序列表的标记方式是将上述的符号换成数字,并辅以<code>.</code>，如：</p>\n' +
  '<blockquote>\n' +
  '<ol>\n' +
  '<li>第一项</li>\n' +
  '<li>第二项</li>\n' +
  '<li>第三项</li>\n' +
  '</ol>\n' +
  '</blockquote>\n' +
  '<h4 id="47-分割线">4.7 分割线</h4>\n' +
  '<p>分割线最常使用就是三个或以上<code>*</code>，还可以使用<code>-</code>和<code>_</code>。</p>\n' +
  '<h4 id="48-链接">4.8 链接</h4>\n' +
  '<p>链接可以由两种形式生成：<strong>行内式</strong>和<strong>参考式</strong>。<br><strong>行内式</strong>：</p>\n' +
  '<blockquote>\n' +
  '<p><a href="https://github.com/coderZsq" title="Castie!">Castie! 的 GitHub 库</a>。</p>\n' +
  '</blockquote>\n' +
  '<p><strong>参考式</strong>：</p>\n' +
  '<blockquote>\n' +
  '<p><a href="https://github.com/coderZsq" title="Castie!">Castie! 的 GitHub 库 1</a><br><a href="https://github.com/coderZsq" title="Castie!">Castie! 的 GitHub 库 2</a></p>\n' +
  '</blockquote>\n' +
  '<p><strong>注意</strong>：上述的<code>[1]:https://github.com/coderZsq &quot;Castie!&quot;</code>不出现在区块中。</p>\n' +
  '<h4 id="49-图片">4.9 图片</h4>\n' +
  '<p>添加图片的形式和链接相似，只需在链接的基础上前方加一个<code>！</code>。</p>\n' +
  '<p><strong>重要提醒</strong>: 将图片拖拽至编辑区即可上传图片！</p>\n' +
  '<h4 id="410-反斜杠">4.10 反斜杠<code>\\</code></h4>\n' +
  '<p>相当于<strong>反转义</strong>作用。使符号成为普通符号。</p>\n' +
  '<h4 id="411-符号">4.11 符号&#39;`&#39;</h4>\n' +
  '<p>起到标记作用。如：</p>\n' +
  '<blockquote>\n' +
  '<p>`ctrl+a`</p>\n' +
  '</blockquote>\n' +
  '<p>效果：</p>\n' +
  '<blockquote>\n' +
  '<p><code>ctrl+a</code></p>\n' +
  '</blockquote>\n' +
  '<h4 id="5-谁在用？">5. <em>谁</em>在用？</h4>\n' +
  '<p>Markdown 的使用者：</p>\n' +
  '<ul>\n' +
  '<li>GitHub</li>\n' +
  '<li>Stack Overflow</li>\n' +
  '<li>Apollo</li>\n' +
  '<li>Moodle</li>\n' +
  '<li>Reddit</li>\n' +
  '<li>等等</li>\n' +
  '</ul>\n' +
  '<h4 id="6-尝试一下">6. 尝试一下</h4>\n' +
  '<ul>\n' +
  '<li><strong>Chrome</strong>下的插件诸如<code>stackedit</code>与<code>markdown-here</code>等非常方便，也不用担心平台受限。</li>\n' +
  '<li><strong>在线</strong>的 dillinger.io 评价也不错</li>\n' +
  '<li><strong>Windowns</strong>下的 MarkdownPad 也用过，不过免费版的体验不是很好。</li>\n' +
  '<li><strong>Mac</strong>下的 Mou 是国人贡献的，口碑很好。</li>\n' +
  '<li><strong>Linux</strong>下的 ReText 不错。</li>\n' +
  '</ul>\n' +
  '<p><strong>当然，最终境界永远都是笔下是语法，心中格式化 :)。</strong></p>\n' +
  '<hr>\n' +
  '<p><strong>注意</strong>：不同的 Markdown 解释器或工具对相应语法（扩展语法）的解释效果不尽相同，具体可参见工具的使用说明。\n' +
  '虽然有人想出面搞一个所谓的标准化的 Markdown，[没想到还惹怒了健在的创始人 John Gruber]\n' +
  '(<a href="http://blog.codinghorror.com/standard-markdown-is-now-common-markdown/">http://blog.codinghorror.com/standard-markdown-is-now-common-markdown/</a> )。</p>\n' +
  '<hr>\n' +
  '<p>以上基本是所有 traditonal markdown 的语法。</p>\n' +
  '<h3 id="其它：">其它：</h3>\n' +
  '<p>列表的使用(非 traditonal markdown)：</p>\n' +
  '<p>用<code>|</code>表示表格纵向边界，表头和表内容用<code>-</code>隔开，并可用<code>:</code>进行对齐设置，两边都有<code>:</code>则表示居中，若不加<code>:</code>则默认左对齐。</p>\n' +
  '<table>\n' +
  '<thead>\n' +
  '<tr>\n' +
  '<th align="center">代码库</th>\n' +
  '<th>链接</th>\n' +
  '</tr>\n' +
  '</thead>\n' +
  '<tbody><tr>\n' +
  '<td align="center">GitHub</td>\n' +
  '<td><a href="https://github.com/coderZsq" title="Markdown">https://github.com/coderZsq</a></td>\n' +
  '</tr>\n' +
  '<tr>\n' +
  '<td align="center">GitHub</td>\n' +
  '<td><a href="https://github.com/coderZsq" title="Markdown">https://github.com/coderZsq</a></td>\n' +
  '</tr>\n' +
  '</tbody></table>\n' +
  '<p>关于其它扩展语法可参见具体工具的使用说明。</p>';

export const MARKDOWN_PLACEHOLDER =
  '# 以# 开头写在第一行, 会默认被识别成标题。\n' +
  '\n' +
  '> 以下用一段教程来引导您快速灵活掌握先进的 MarkDown 语法。\n' +
  '\n' +
  '## 正文\n' +
  '\n' +
  '### 1. Markdown*是什么*？\n' +
  '\n' +
  '**Markdown**是一种轻量级**标记语言**，它以纯文本形式( _易读、易写、易更改_ )编写文档，并最终以 HTML 格式发布。  \n' +
  '**Markdown**也可以理解为将以 MARKDOWN 语法编写的语言转换成 HTML 内容的工具。\n' +
  '\n' +
  '### 2. *谁*创造了它？\n' +
  '\n' +
  '它由[**Aaron Swartz**](http://www.aaronsw.com/)和**John Gruber**共同设计，**Aaron Swartz**就是那位（ _2013 年 1 月 11 日_ ）自杀,有着**开挂**一般人生经历的程序员。维基百科对他的[介绍](http://zh.wikipedia.org/wiki/%E4%BA%9A%E4%BC%A6%C2%B7%E6%96%AF%E6%B2%83%E8%8C%A8)是：**软件工程师、作家、政治组织者、互联网活动家、维基百科人**。\n' +
  '\n' +
  '他有着足以让你跪拜的人生经历：\n' +
  '\n' +
  '- **14 岁**参与 RSS 1.0 规格标准的制订。\n' +
  '- **2004**年入读**斯坦福**，之后退学。\n' +
  '- **2005**年创建[Infogami](http://infogami.org/)，之后与[Reddit](http://www.reddit.com/)合并成为其合伙人。\n' +
  '- **2010**年创立求进会（Demand Progress），积极参与禁止网络盗版法案（SOPA）活动，最终该提案被撤回。\n' +
  '- **2011**年 7 月 19 日，因被控从 MIT 和 JSTOR 下载 480 万篇学术论文并以免费形式上传于网络被捕。\n' +
  '- **2013**年 1 月自杀身亡。\n' +
  '\n' +
  '![Aaron Swartz](https://s3.ifanr.com/wp-content/uploads/2013/06/Aaron_Swartz.jpg!720)\n' +
  '\n' +
  '天才都有早逝的归途。\n' +
  '\n' +
  '### 3. *为什么*要使用它？\n' +
  '\n' +
  '- 它是易读（看起来舒服）、易写（语法简单）、易更改**纯文本**。处处体现着**极简主义**的影子。\n' +
  '- 兼容 HTML，可以转换为 HTML 格式发布。\n' +
  '- 跨平台使用。\n' +
  '- 越来越多的网站支持 Markdown。\n' +
  '- 更方便清晰地组织你的电子邮件。（Markdown-here, Airmail）\n' +
  '- 摆脱 Word（我不是认真的）。\n' +
  '\n' +
  '### 4. *怎么*使用？\n' +
  '\n' +
  '如果不算**扩展**，Markdown 的语法绝对**简单**到让你爱不释手。\n' +
  '\n' +
  'Markdown 语法主要分为如下几大部分：\n' +
  "**标题**，**段落**，**区块引用**，**代码区块**，**强调**，**列表**，**分割线**，**链接**，**图片**，**反斜杠 `\\`**，**符号'`'**。\n" +
  '\n' +
  '#### 4.1 标题\n' +
  '\n' +
  '两种形式：  \n' +
  '1）使用`=`和`-`标记一级和二级标题。\n' +
  '\n' +
  '> 一级标题  \n' +
  '> =========  \n' +
  '> 二级标题  \n' +
  '> ---------\n' +
  '\n' +
  '2）使用`#`，可表示 1-6 级标题。\n' +
  '\n' +
  '> # 一级标题  \n' +
  '> ## 二级标题  \n' +
  '> ### 三级标题  \n' +
  '> #### 四级标题  \n' +
  '> ##### 五级标题  \n' +
  '> ###### 六级标题\n' +
  '\n' +
  '#### 4.2 段落\n' +
  '\n' +
  '段落的前后要有空行，所谓的空行是指没有文字内容。若想在段内强制换行的方式是使用**两个以上**空格加上回车（引用中换行省略回车）。\n' +
  '\n' +
  '#### 4.3 区块引用\n' +
  '\n' +
  '在段落的每行或者只在第一行使用符号`>`,还可使用多个嵌套引用，如：\n' +
  '\n' +
  '> > 区块引用  \n' +
  '> >> 嵌套引用\n' +
  '\n' +
  '#### 4.4 代码区块\n' +
  '\n' +
  '代码区块的建立是在每行加上 4 个空格或者一个制表符（如同写代码一样）。如  \n' +
  '普通段落：\n' +
  '\n' +
  'void main()  \n' +
  '{  \n' +
  ' printf("Hello, Markdown.");  \n' +
  '}\n' +
  '\n' +
  '代码区块：\n' +
  '\n' +
  '    void main()\n' +
  '    {\n' +
  '        printf("Hello, Markdown.");\n' +
  '    }\n' +
  '\n' +
  '**注意**:需要和普通段落之间存在空行。\n' +
  '\n' +
  '#### 4.5 强调\n' +
  '\n' +
  '在强调内容两侧分别加上`*`或者`_`，如：\n' +
  '\n' +
  '> *斜体*，_斜体_  \n' +
  '> **粗体**，__粗体__\n' +
  '\n' +
  '#### 4.6 列表\n' +
  '\n' +
  '使用`·`、`+`、或`-`标记无序列表，如：\n' +
  '\n' +
  '**注意**：标记后面最少有一个*空格*或*制表符*。若不在引用区块中，必须和前方段落之间存在空行。\n' +
  '\n' +
  '> - 第一项\n' +
  '> - 第二项\n' +
  '> - 第三项\n' +
  '\n' +
  '有序列表的标记方式是将上述的符号换成数字,并辅以`.`，如：\n' +
  '\n' +
  '> 1. 第一项\n' +
  '> 2. 第二项\n' +
  '> 3. 第三项\n' +
  '\n' +
  '#### 4.7 分割线\n' +
  '\n' +
  '分割线最常使用就是三个或以上`*`，还可以使用`-`和`_`。\n' +
  '\n' +
  '#### 4.8 链接\n' +
  '\n' +
  '链接可以由两种形式生成：**行内式**和**参考式**。  \n' +
  '**行内式**：\n' +
  '\n' +
  "> [Castie! 的 GitHub 库](https://github.com/coderZsq 'Castie!')。\n" +
  '\n' +
  '**参考式**：\n' +
  '\n' +
  '> [Castie! 的 GitHub 库 1][1]  \n' +
  '> [Castie! 的 GitHub 库 2][2]\n' +
  '\n' +
  "[1]: https://github.com/coderZsq 'Castie!'\n" +
  "[2]: https://github.com/coderZsq 'Castie!'\n" +
  '\n' +
  '**注意**：上述的`[1]:https://github.com/coderZsq "Castie!"`不出现在区块中。\n' +
  '\n' +
  '#### 4.9 图片\n' +
  '\n' +
  '添加图片的形式和链接相似，只需在链接的基础上前方加一个`！`。\n' +
  '\n' +
  '**重要提醒**: 将图片拖拽至编辑区即可上传图片！\n' +
  '\n' +
  '#### 4.10 反斜杠`\\`\n' +
  '\n' +
  '相当于**反转义**作用。使符号成为普通符号。\n' +
  '\n' +
  "#### 4.11 符号'`'\n" +
  '\n' +
  '起到标记作用。如：\n' +
  '\n' +
  '> \\`ctrl+a\\`\n' +
  '\n' +
  '效果：\n' +
  '\n' +
  '> `ctrl+a`\n' +
  '\n' +
  '#### 5. *谁*在用？\n' +
  '\n' +
  'Markdown 的使用者：\n' +
  '\n' +
  '- GitHub\n' +
  '- Stack Overflow\n' +
  '- Apollo\n' +
  '- Moodle\n' +
  '- Reddit\n' +
  '- 等等\n' +
  '\n' +
  '#### 6. 尝试一下\n' +
  '\n' +
  '- **Chrome**下的插件诸如`stackedit`与`markdown-here`等非常方便，也不用担心平台受限。\n' +
  '- **在线**的 dillinger.io 评价也不错\n' +
  '- **Windowns**下的 MarkdownPad 也用过，不过免费版的体验不是很好。\n' +
  '- **Mac**下的 Mou 是国人贡献的，口碑很好。\n' +
  '- **Linux**下的 ReText 不错。\n' +
  '\n' +
  '**当然，最终境界永远都是笔下是语法，心中格式化 :)。**\n' +
  '\n' +
  '---\n' +
  '\n' +
  '**注意**：不同的 Markdown 解释器或工具对相应语法（扩展语法）的解释效果不尽相同，具体可参见工具的使用说明。\n' +
  '虽然有人想出面搞一个所谓的标准化的 Markdown，[没想到还惹怒了健在的创始人 John Gruber]\n' +
  '(http://blog.codinghorror.com/standard-markdown-is-now-common-markdown/ )。\n' +
  '\n' +
  '---\n' +
  '\n' +
  '以上基本是所有 traditonal markdown 的语法。\n' +
  '\n' +
  '### 其它：\n' +
  '\n' +
  '列表的使用(非 traditonal markdown)：\n' +
  '\n' +
  '用`|`表示表格纵向边界，表头和表内容用`-`隔开，并可用`:`进行对齐设置，两边都有`:`则表示居中，若不加`:`则默认左对齐。\n' +
  '\n' +
  '| 代码库 | 链接                                                                  |\n' +
  '| :----: | --------------------------------------------------------------------- |\n' +
  "| GitHub | [https://github.com/coderZsq](https://github.com/coderZsq 'Markdown') |\n" +
  "| GitHub | [https://github.com/coderZsq](https://github.com/coderZsq 'Markdown') |\n" +
  '\n' +
  '关于其它扩展语法可参见具体工具的使用说明。\n';
