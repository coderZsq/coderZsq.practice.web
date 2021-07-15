let message1: string = 'hello world';
let message2: string = 'Hello World';

// 个人习惯: 默认情况下, 如果可以推导出对应的标识符的类型时, 一般情况是不加
const name = 'sq';
const age = 18;
const height = 1.88;

let message3 = `name: ${name} age: ${age} height: ${height}`;
console.log(message3);

export {};
