<pre>
#学号: G20200447060029
#姓名: 朱双泉
#班期: 6班
#小组: 2组
#作业&总结链接: https://github.com/coderZsq/Frontend-06-Template/tree/main/Week%2003
</pre>

<pre>
学习笔记

看完视频编写出所有课堂代码.

AST难点: 
1. 一个数字解析包装成只有1项的乘法表达式
2. 一个乘法表达式解析包装成只有1项的加法表达式 (先乘除后加减)
3. 在所有构建完成后加入EOF表示终结
4. 理解四则运算语法 | 表示可能的分支判断
</pre>

```
<Expression>::=              
  <AdditiveExpression><EOF>   

<AdditiveExpression>::=
  <MultiplicativeExpression>
  |<AdditiveExpression><+><MultiplicativeExpression>
  |<AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression>::=
  <Number>
  |<MultiplicativeExpression><*><Number>
  |<MultiplicativeExpression></><Number>
```