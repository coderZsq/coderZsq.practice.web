import code from './doc.md';
import './style.css';
import 'highlight.js/styles/default.css';

console.log('Hello Loader');

const message = 'Hello World';
console.log(message);

const foo = () => {
  console.log('foo');
};

foo();

document.body.innerHTML = code;
