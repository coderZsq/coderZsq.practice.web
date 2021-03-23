import { sum } from './math';

import './format';
import('./abc').then((res) => {});
import './style.css';

console.log(sum(20, 30));

console.log(window.abc);

const titleDiv = document.createElement('div');
titleDiv.className = 'title';
document.body.appendChild(titleDiv);

const h2El = document.createElement('h2');
document.body.appendChild(h2El);
