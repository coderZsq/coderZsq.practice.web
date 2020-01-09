// 设置一个函数用来比较两个节点的不同
let keyIndex = 0;
function diff(oldNode, newNode) {
  /**
   * 比较两个节点的不同
   * 1. 我们比较的结果会放在一个patch中
   * 在这个patch中我们使用节点的顺序值作为key
   * 使用具体的差别作为值
   */
  let patch = {};
  let index = 0;
  // 设置一个函数来进行比较
  walk(oldNode, newNode, index, patch);
  return patch;
}

// 实现diffChildren
function diffChildren(oldChildren, newChildren, index, patch) {
  /**
   * 遍历对应的节点, 然后重新执行walk方法
   * 当时如果我们直接这样写, index值是有问题的
   */
  // console.log(oldChildren);
  // if (!oldChildren) return;
  oldChildren.forEach((child, idx) => {
    walk(child, newChildren[idx], ++keyIndex, patch);
  });
}

function isString(node) {
  /**
   * 我们使用对应的toString方法通过object来判断是否是字符串
   * 注意不能使用单引号, 需要使用双引号标识字符
   */
  return Object.prototype.toString.call(node) == "[object String]";
}

// 设置实现对应的walk函数
function walk(oldNode, newNode, index, patch) {
  // 1. 设置一个数组用来记录当前的不同
  let currentPatch = []
  /**
   * 2. 比较具体的不同的差别
   * 差别分成四种类型
   * 2.1 如果只是属性不同我们标识为 ATTR, 注意我们采用的是深度优先遍历, 如果有子节点, 我们需要继续执行相同的方法
   * 所以我们刚才设置了一个函数用来标识具体的比较, 为了递归
   * 2.2 如果是文字内容不同, 我们标识为TEXT
   * 2.3 如果是节点被删除了, 我们标记为REMOVE
   * 2.4 如果是节点被替换了, 我们标识为REPLACE
   */
  if (!newNode) {
    // 标识节点被删除了
    currentPatch.push({ type: 'REMOVE', index });
  } else if (isString(oldNode) && isString(newNode)) {
    // 如果是文本节点, 我们需要记录对应的新的文本
    if (oldNode != newNode) {
      currentPatch.push({ type: 'TEXT', text: newNode });
    }
  } else if (oldNode.tagName == newNode.tagName) {
    // 比较属性, 设置一个方法来比较属性
    let attrs = diffAttr(oldNode.props, newNode.props);
    // 如果对应的attrs中有值, 我们就记录
    if (Object.keys(attrs).length > 0) {
      currentPatch.push({ type: 'ATTR', attrs });
    }
    // 如果我们当前的节点有子节点, 我们需要继续执行对应的获取不同
    diffChildren(oldNode.children, newNode.children, index, patch);
  } else {
    // 被替换
    currentPatch.push({ type: 'REPLACE', node: newNode });
  }

  // 把对应的currentPatch设置给patch
  if (currentPatch.length > 0) {
    patch[index] = currentPatch;
  }
}

// 实现比较属性的方法
function diffAttr(oldAttrs, newAttrs) {
  /** 
   * 遍历旧的属性, 如果旧的属性的值和新的属性的值不同, 我们就记录
   * 遍历新的属性, 如果旧的属性中没有对应的属性, 我们也需要记录
   */
  let attrpatch = {}; // 因为可能会有很多不同
  for (let key in oldAttrs) {
    if (oldAttrs[key] != newAttrs[key]) {
      attrpatch[key] = newAttrs[key];
    }
  }
  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      // 如果旧的没有对应的属性, 我们就记录
      attrpatch[key] = newAttrs[key];
    }
  }
  return attrpatch;
}

module.exports = diff;