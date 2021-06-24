const h = (tag, props, children) => {
  // vnode -> javascript -> {}
  return {
    tag,
    props,
    children,
  };
};

const mount = (vnode, container) => {
  // vnode -> element
  // 1. 创建出真实的原生, 并且在vnode上保留el
  const el = (vnode.el = document.createElement(vnode.tag));

  // 2. 处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];
      if (key.startsWith('on')) {
        // 对事件监听的判断
        el.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  // 3. 处理children
  if (vnode.children) {
    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children;
    } else {
      vnode.children.forEach((item) => {
        mount(item, el);
      });
    }
  }

  // 4. 将el挂载到container上
  container.appendChild(el);
};
