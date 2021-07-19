// 可选类型是必须写在必选类型的后面
// y -> undefined | number
function foo(x: number, y?: number) {}

foo(20, 30);
foo(20);
