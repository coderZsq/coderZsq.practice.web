let { render, Element } = require('./Element')
let allPatches;
let keyIndex = 0;

function patch(root, patches) {
  allPatches = patches;
  walk(root);
}

function walk(node) {
  // 过程分析: 取出每一个currentPatch然后设置给对应的节点
  let currentPatch = allPatches[keyIndex++];
  // let childrenNodes = node.childNodes;
  // console.log(childrenNodes);
  // (node.childNodes || []).forEach(child => walk(child));
  for (let i = 0; i < node.childNodes; i++) {
    return walk(node.childNodes[i]);
  }
  // 设置对应的一个方法来执行具体的打补丁
  if (currentPatch) {
    doPatch(node, currentPatch);
  }
}

function setAttr(node, attr, value) {
  switch (attr) {
    case 'value':
      if (node.tagName.toUpperCase() == 'INPUT' || node.tagName.toUpperCase() == 'TEXTAREA') {
        node.value = value;
      } else {
        node.setAttribute(key, value);
      }
      break;
    case 'style':
      node.style.cssText = value;
      break;
    default:
      node.setAttribute(attr, value);
  }
}

// 实现具体的方法
function doPatch(node, currentPatch) {
  // 我们需要遍历对应的currentPath, 取出对应的具体的值给节点打补丁
  currentPatch.forEach(patch => {
    // 我们现在打补丁的时候, 也需要设置四种类型
    switch (patch.type) {
      case 'ATTR':
        // 就是给当前的节点设置对应的属性
        // 遍历所有的属性, 然后设置值
        for (let key in patch.attrs) {
          setAttr(node, key, patch.attrs[key]);
        }
        break;
      case 'TEXT':
        node.textContent = patch.text;
        break;
      case 'REPLACE':
        let newNode = patch.node instanceof Element ? render(patch.node) : document.createTextNode(patch.node);
        // 使用新的节点替换旧的节点
        node.parentNode.replaceChild(newNode, node);
        break;
      case 'REMOVE':
        node.parentNode.removeChild(node);
    }
  });
}

module.exports = patch;