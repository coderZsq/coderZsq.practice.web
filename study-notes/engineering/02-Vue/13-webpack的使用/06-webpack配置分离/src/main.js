
// 5.使用Vue进行开发
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})

document.writeln('<span>哈哈哈</span>')
