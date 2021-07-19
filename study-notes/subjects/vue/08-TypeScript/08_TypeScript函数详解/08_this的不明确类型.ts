type ThisType = { name: string };

function eating(this: ThisType, message: string) {
  console.log(this.name + ' eating ' + message);
}

const info = {
  name: 'sq',
  eating: eating,
};

// 隐式绑定
info.eating('哈哈哈');

// 显式绑定
eating.call({ name: 'kobe' }, '呵呵呵');
eating.apply({ name: 'james' }, ['嘿嘿嘿']);

export {};
