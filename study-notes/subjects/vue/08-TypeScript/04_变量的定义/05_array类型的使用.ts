// 确定一个事实: names是一个数组类型, 但是数组中存放的是什么类型的元素呢?
// 不好的习惯: 一个数组中在TypeScript开发中, 最好存放的数据类型是固定的(string)
// 类型注解: type annotation
const names1: Array<string> = []; // 不推荐(react jsx中是有冲突 <div></div>)
const names2: string[] = []; // 推荐

/// 在数组中存放不同的类型是不好的习惯
// names.push('abc');
// names.push(123);
