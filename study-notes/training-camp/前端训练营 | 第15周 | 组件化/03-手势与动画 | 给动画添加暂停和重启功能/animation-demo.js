import { Timeline, Animation } from './animation.js';

let tl = new Timeline();

tl.start();

tl.add(new Animation(document.querySelector('#el').style, 'transform', 0, 500, 2000, 0, null, v => `translateX(${v}px)`));

document.querySelector('#pause-btn').addEventListener('click', () => tl.pause());
document.querySelector('#resume-btn').addEventListener('click', () => tl.resume());