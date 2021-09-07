function createFnArray() {
  // var arr = [1, 1, 1, 1, 1, 1, 1, 1,1, 1,1, 1,1 ]
  // 占据的空间是4M x 100 + 其他的内存 = 400M+
  var arr = new Array(1024 * 1024).fill(1)
  return function() {
    console.log(arr.length)
  }
}

// var arrayFn = createFnArray()
// arrayFn = null

// 100 * 100 = 10000 = 10s
var arrayFns = []
for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    arrayFns.push(createFnArray())
  }, i * 100);
}

// arrayFns = null
setTimeout(() => {
  for (var i = 0; i < 100; i++) {
    setTimeout(() => {
      arrayFns.pop()
    }, 100 * i);
  }
}, 10000);
