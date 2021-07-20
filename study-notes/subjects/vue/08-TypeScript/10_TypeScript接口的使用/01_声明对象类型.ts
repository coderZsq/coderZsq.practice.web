// 通过类型(type)别名来声明对象类型
// type InfoType = { name: string; age: number };

// 另外一种方式声明对象类型: 接口interface
// 在其中可以定义可选类型
// 也可以定义只读属性
interface IInfoType {
  readonly name: string;
  age: number;
  friend?: {
    name: string;
  };
}

const info: IInfoType = {
  name: 'sq',
  age: 18,
  friend: {
    name: 'kobe',
  },
};

console.log(info.friend?.name);
console.log(info.name);
// info.name = '123';
info.age = 20;
