# 定义函数
sum = (x) ->
  # 函数体
  x * x
  # 如果不是要返回特定的值,可以不写return

# 如果函数没有参数的话,可以省略小括号
num = ->
  # 函数体
  2 + 2

# 调用函数
console.log sum(2)
# 如果这个函数是有参数的,括号可以省略
console.log sum 3
# 如果没有参数,必须加上
console.log num()

# 有默认参数的函数, 将有默认参数的参数放在最后面
sum1 = (y, x = 2) ->
  x + y

console.log sum1(3)

# 将函数赋值给一个变量
result = sum1(5)
console.log result


# 也可以定义一个立即执行的匿名函数
(->)()

# 可以显示的返回一个值
sum2 = (x, y, c) ->
  x + y + c
  # 显式的返回一个值
  return 0

console.log sum2()