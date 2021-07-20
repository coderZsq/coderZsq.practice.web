// 函数的重载, 函数的名称相同, 但是参数不同的几个函数, 就是函数的重载
function add(num1: number, num2: number): number; // 没函数体
function add(num1: string, num2: string): string;

function add(num1: any, num2: any): any {
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1.length + num2.length;
  }
  return num1 + num2;
}

const result = add(20, 30);
const result2 = add('abc', 'cba');
console.log(result);
console.log(result2);

// 在函数的重载中, 实现函数时不能直接被调用的
// add({ name: 'sq' }, { age: 18 });

export {};
