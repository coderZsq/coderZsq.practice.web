// function foo(): never {
//   // 死循环
//   while (true) {}
// }

// function bar(): never {
//   throw new Error();
// }

// 提前
// 封装了一个核心函数
function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log('string处理方式处理message');
      break;
    case 'number':
      console.log('number处理方式处理message');
      break;
    case 'boolean':
      console.log('boolean处理方式处理message');
      break;
    default:
      const check: never = message;
  }
}

handleMessage('abc');
handleMessage(123);

// 张三
handleMessage(true);
