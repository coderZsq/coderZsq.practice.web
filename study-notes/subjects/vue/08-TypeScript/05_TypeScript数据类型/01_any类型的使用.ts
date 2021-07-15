// 当进行一些类型断言 as any
// 在不想给某些JavaScript添加具体的数据类型时(原生JavaScript代码是一样的)
let message: any = 'Hello World';

message = 123;
message = true;
message = {};

// message();
// message.split(' ');

console.log(message);
const arr: any[] = [];

