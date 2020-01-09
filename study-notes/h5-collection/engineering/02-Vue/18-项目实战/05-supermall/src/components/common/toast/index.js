import Toast from './Toast'

const plugin = {}

plugin.install = function (Vue) {
  // 封装所有关于Toast, 我想封装的代码
  // Vue.prototype.$toast = function (options={})
  // 1.通过Vue.extend(组件对象), 创建一个组件构造器
  const ToastConstructor = Vue.extend(Toast)

  // 2.通过组件构造器创建组件
  const toast = new ToastConstructor()

  // 3.通过组件构造器创建出来的组件, 必须挂在到某一个元素
  toast.$mount(document.createElement('div'))

  // 4.将toast.$el -> 组件的根元素, 将根元素添加到body中
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = function (message, duration=1000) {
    // 5.使用toast组件即可
    toast.message = message
    toast.isShow = true

    setTimeout(() => {
      toast.isShow = false
    }, duration)
  }
}

export default plugin

