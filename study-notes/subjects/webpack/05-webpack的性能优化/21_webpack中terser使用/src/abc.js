const message = 'Hello World';
console.log(message);

function sum(num1, num2) {
  return arguments[0] + arguments[1];
}

console.log(sum(20, 30));

const info = {
  foo() {
    return 'foo';
  },
};

if (false) {
  console.log('哈哈哈');
}

class Person {}
