import 'core-js/stable';
import 'regenerator-runtime/runtime';

const message = 'Hello World';

const foo = (info) => {
  console.log(info);
}

const p = new Promise((resolve, reject) => { })

foo(message);