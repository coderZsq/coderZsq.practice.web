console.log(process.argv[2]);
console.log(process.argv[3]);

console.clear();

process.argv.forEach(item => {
  console.log(item);
});

console.trace();

function foo() {
  bar();
}

function bar() {
  console.trace();
}

foo();