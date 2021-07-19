type Person = {
  name: string;
  friend?: {
    name: string;
    age?: number;
    girlFriend?: {
      name: string;
    };
  };
};

const info: Person = {
  name: 'sq',
  friend: {
    name: 'kobe',
    girlFriend: {
      name: 'lily',
    },
  },
};

// 另外一个文件中
console.log(info.name);
// console.log(info.friend!.name);
console.log(info.friend?.name);
console.log(info.friend?.age);
console.log(info.friend?.girlFriend?.name);

// if (info.friend) {
//   console.log(info.friend.name);

//   if (info.friend.age) {
//     console.log(info.friend.age);
//   }
// }
