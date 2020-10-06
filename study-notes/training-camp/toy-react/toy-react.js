const RENDER_TO_DOM = Symbol('render to dom')

// 元素的包装类
class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild(component) {
    this.root.appendChild(component.root)
  }
  [RENDER_TO_DOM](range) {
    this.render().[RENDER_TO_DOM](range)
  }
}

// 文字的包装类
class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content)
  }
  [RENDER_TO_DOM](range) {
    this.render().[RENDER_TO_DOM](range)
  }
}

export class Component {
  constructor() {
    this.props = Object.create(null)
    this.children = []
    this._root = null
  }
  setAttribute(name, value) {
    this.props[name] = value
  }
  appendChild(component) {
    this.children.push(component)
  }
  [RENDER_TO_DOM](range) {
    this.render().[RENDER_TO_DOM](range)
  }
}

export function createElement(type, attributes, ...children) {
  // 判断是原生节点还是组件节点
  let e;
  if (typeof type === 'string') {
    e = new ElementWrapper(type)
  } else {
    e = new type
  }
  // 将属性挂在到节点上
  for (let p in attributes) {
    e.setAttribute(p, attributes[p])
  }
  // 插入节点
  let insertChildren = (children) => {
    for (let child of children) {
      // 如果是字符串则判断为文字节点
      if (typeof child === 'string') {
        child = new TextWrapper(child)
      }
      // 如果传入的是数组 则递归插入
      if ((typeof child === 'object') && (child instanceof Array)) {
        insertChildren(child)
      } else {
        e.appendChild(child)
      }
    }
  }
  insertChildren(children)
  return e
}

export function render(component, parentElement) {
  // 将组件进行挂在
  parentElement.appendChild(component.root)
}