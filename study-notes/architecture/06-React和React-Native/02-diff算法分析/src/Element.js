// 创建一个虚拟节点
class Element {
  // 设置一个类用来记录虚拟节点
  constructor(tagName, props, children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
  }
}

// 设置一个函数用来创建对应的节点
function createElement(tagName, props, children) {
  return new Element(tagName, props, children);
}

// 设置实现对应的设置属性的函数
function setAttr(node, attr, value) {
  switch (attr) {
    case 'value':
      if (node.tagName.toUpperCase() == 'INPUT' || node.tagName.toUpperCase() == 'TEXTAREA') {
        node.value = value;
      } else {
        node.setAttribute(attr, value);
      }
      break;
    case 'style':
      node.style.cssText = value;
      break;
    default:
      node.setAttribute(attr, value);
  }
}

// 设置一个函数用来渲染节点为真实的节点
function render(eleObj) { // 参数表示一个虚拟节点
  // 表示创建一个真实的节点
  let el = document.createElement(eleObj.tagName);
  // 赋值对应的属性
  for (let key in eleObj.props) {
    // 设置对应的属性
    // 给每一个元素的每一个属性设置对应的value值
    setAttr(el, key, eleObj.props[key]);
  }
  // 如果当前节点有子节点, 那么我们需要给子节点设置对应的属性
  eleObj.children.forEach(child => {
    // 如果是虚拟元素节点, 我们需要进行同样的操作, 就是创建真实节点然后设置属性, 如果是文本节点, 我们直接创建文本节点
    let newChild = child instanceof Element ? render(child) : document.createTextNode(child);
    el.appendChild(newChild);
  });
  return el;
}

module.exports = { Element, createElement, render };