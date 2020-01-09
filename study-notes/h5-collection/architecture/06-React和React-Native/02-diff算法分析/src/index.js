// 1. 设置虚拟节点, 然后渲染成真实的节点
// 2. 比较两个虚拟节点, 获取对应的不同patch
// 3. 把对应的patch这个补丁打在对应的真实的节点上
let { render, createElement, Element } = require('./Element')
let diff = require('./diff')
let patch = require('./patch')
// 1. 创建一个虚拟节点
let viDom = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['1234']),
]);
let viDom2 = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['14 ']),
]);
// 核心思想: 我们需要获取patches
// patches我们使用对象来记录, 使用每一个具体的节点的索引作为key
// 然后使用每一个具体的patches作为value
let patches = diff(viDom, viDom2);
console.log(patches);

let realDom = render(viDom);
document.body.appendChild(realDom);

patch(realDom, patches);
