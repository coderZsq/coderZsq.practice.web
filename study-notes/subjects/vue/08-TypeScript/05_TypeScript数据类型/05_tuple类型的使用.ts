// tuple元组: 多种元素的组合
// 'sq' 18 1.88

// 1. 数组的弊端
// const info: any[] = ['sq', 18, 1.88];
// const infoObj = {
//   name: 'sq',
//   age: 18,
//   height: 1.88,
// };

// const name = info[0];
// console.log(name.length);

// 2. 元组的特点
const info: [string, number, number] = ['sq', 18, 1.88];
const name = info[0];
console.log(name.length);
// const age = info[1];
// console.log(age.length);

export {};
