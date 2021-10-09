// 第一个参数依然是模块字符串中整个字符串, 只是被切成多块,放到了一个数组中
// 第二个参数是模块字符串中, 第一个 ${}
function foo(m, n, x) {
  console.log(m, n, x, '---------')
}

// foo("Hello", "World")

// 另外调用函数的方式: 标签模块字符串
// foo``

// foo`Hello World`
const name = "why"
const age = 18
// ['Hello', 'Wo', 'rld']
foo`Hello${name}Wo${age}rld`


