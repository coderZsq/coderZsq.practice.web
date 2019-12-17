// 创建一个类
function Vue(options) {
  this.$options = options
  let data = this._data = this.$options.data
  // 对data中的数据进行劫持
  observe(data)
  // 设置数据代理
  for (let key in data) {
    Object.defineProperty(this, key, {
      get() {
        return this._data[key]
      },
      set(newVal) {
        this._data[key] = newVal
      }
    })
  }
  // 编译模板, 设置一个对象来编译对应的模板
  return Compile(options.el, this)
}

function Compile(el, vm) {
  // 1. 获取对应的标签
  vm.$el = document.querySelector(el)
  // 2. 创建文档碎片
  let fragment = document.createDocumentFragment();
  // 3. 设置对应的遍历, 添加节点到文档碎片中
  while (child = vm.$el.firstChild) {
    // 当第一个节点有值的时候, 我们就去添加
    fragment.appendChild(child)
  }
  // 编译文档碎片, 就是把{{}}的内容改为具体的值
  // 因为我们经过分析, 如果是对应的节点还有子节点, 我们需要继续重新执行对应的步骤
  // 所以我们需要使用递归, 那么我们可以把对应的步骤设置为一个函数, 然后递归调用
  replace(fragment)
  function replace(fragment) {
    Array.from(fragment).forEach(function (node) {
      // 3.1 获取对应的节点的内容, 然后替换
      let text = node.textContent
      // 3.2 设置正则匹配
      let reg = /\{\{(.*)\}\}/
      // 如果我们的节点是文本节点, 而且可以匹配, 我们就需要使用对应的值进行替换
      if (node.nodeType == 3 && reg.test(test)) {
        // 我们替换对应的内容
        let arr = RegExp.$1.split('.') // info.news
        let val = vm
        arr.forEach(key => {
          val = val[key] // 第一次获取的是this.info, 第二次获取的就是news的内容
        })
        // 我们使用对应的text去替换
        text.replace(/\{\{(.*)\}\}/, val)
      }
      // 如果我们的node还有子节点, 我们需要重新继续替换
      if (node.childNodes) {
        // 重新调用这个方法
        replace(node)
      }
    })
  }
  // 4. 然后添加文档碎片
  vm.$el.appendChild(fragment)
}

// 设置对应的Observe类
function Observe(data) {
  // 使用对应方法来劫持data中的数据
  for (let key in data) {
    let val = data[key]
    observe(data)
    // 设置对应的方法来劫持每一个key
    Object.defineProperty(data, key, {
      get() {
        return val
      },
      set(newVal) {
        if (newVal == val) return
        val = newVal
        // 如果设置的值也是一个对象, 我们需要重新调用方法
        observe(newVal)
      }
    })
  }
}

// 设置处理接触数据
function observe(data) {
  if (typeof data != 'object') return

  // 设置一个对象的对象来处理对应数据
  return new Observe(data)
}