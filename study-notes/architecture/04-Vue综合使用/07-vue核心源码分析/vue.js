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
        // 我们设置对应的数据修改, 所以我们可以在这里设置对应的观察者
        new Watcher(vm, RegExp.$1, function (newVal) {
          text.replace(/\{\{(.*)\}\}/, newVal)
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
  let dep = new Dep()
  // 使用对应方法来劫持data中的数据
  for (let key in data) {
    let val = data[key]
    observe(data)
    // 设置对应的方法来劫持每一个key
    Object.defineProperty(data, key, {
      get() {
        // 设置添加对应的watcher, 我们需要根据是否有创建的watcher来添加
        Dep.target && dep.addsub(Dep.target)
        return val
      },
      set(newVal) {
        if (newVal == val) return
        val = newVal
        // 如果设置的值也是一个对象, 我们需要重新调用方法
        observe(newVal)
        dep.notify()
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

// 当我们发现数据发生改变后, 我们需要对界面进行更新
function Dep() {
  // 设置对应的数组来记录有多少个订阅者
  this.subs = []
}
// 发布中心有两个方法, 第一个方法就是添加订阅者
Dep.prototype.addsub = function (sub) {
  this.subs.push(sub)
}
// 第二个方法就是设置对应的通知订阅者
Dep.prototype.notify = function () {
  // 就是通知所有的订阅者, 然后订阅者接受到信息后, 作出对应的操作
  this.subs.forEach(sub => sub.update())
}

// 设置对应的订阅者, 订阅者根据我们现在的实际情况我们可以设置三个参数
function Watcher(vm, exp, fn) {
  // fn表示接受到通知后要做的事情
  this.vm = vm
  this.exp = exp
  this.fn = fn
  // 我们需要使用对应的发布中心添加对应的watcher, 然后发布, 让对应的数据改变
  // 一般我们需要当如果界面中有使用到{{}}数据的时候才去添加
  Dep.target = this
  // 需要重设对应的get方法
  let arr = exp.split('.')
  let val = this.vm
  arr.forEach(function (key) {
    val = val[key]
  })
  Dep.target = null
}
// 一般订阅者有一个方法, 就是更新方法, 这个方法内部我们只需要调用对应fn即可
Watcher.prototype.update = function () {
  let arr = this.exp.split('.')
  let val = this.vm
  arr.forEach(function (key) {
    val = val[key]
  })
  this.fn(val)
}