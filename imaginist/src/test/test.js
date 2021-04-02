let a = ```
<h1 id="fe01-展示存量文章">FE01. 展示存量文章</h1>
<p>由朱双泉创建, 最后修改于三月 31, 2021</p>
<h2 id="文档变更历史">文档变更历史</h2>
<table>
<thead>
<tr>
<th align="center">版本</th>
<th align="center">日期</th>
<th align="center">负责人</th>
<th align="center">说明</th>
</tr>
</thead>
```;

const edit = a;
let split = 0;
for (let i = 0; i < edit.length; i++) {
  if (edit.charAt(i) === '\n') {
    split = i;
  }
}
