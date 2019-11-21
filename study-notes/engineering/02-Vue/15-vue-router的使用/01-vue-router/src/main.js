import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Vue.prototype.test = function () {
//   console.log('test');
// }
// Vue.prototype.name = "coderwhy"

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// console.log(router);

// const obj = {
//   name: 'why'
// }
//
// Object.defineProperty(obj, 'age', 18)
