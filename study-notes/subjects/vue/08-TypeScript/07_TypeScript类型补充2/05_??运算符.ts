let message: string | null = 'Hello World';

const content = message ?? '你好啊, 李银河';
// const content = message ? message : '你好啊, 李银河';

console.log(content);
