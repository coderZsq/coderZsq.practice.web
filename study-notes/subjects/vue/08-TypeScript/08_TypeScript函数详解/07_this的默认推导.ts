// this是可以被推导出来 info对象(TypeScript推导出来)
const info = {
  name: 'sq',
  eating() {
    console.log(this.name + ' eating');
  },
};

info.eating();

export {};
