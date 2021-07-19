// message? -> undefined | string
function printMessageLength(message?: string) {
  // if (message) {
  //   console.log(message.length);
  // }
  // vue3源码;
  console.log(message!.length);
}

printMessageLength('aaaa');
printMessageLength('hello world');
