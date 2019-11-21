import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


// const nums = [11, 22, 33]
// for (let i in nums) {
//   console.log(i);
//   console.log(nums[i]);
//   console.log(typeof i)
// }

// 对两个对象的公共代码进行抽取
// 继承是抽取类的公共代码
// class Animal {
//   run() {
//
//   }
// }
//
// class Person extends Animal {
// }
//
// class Cat extends Animal {
// }


// mixin
// const obj1 = {
//   run() {
//
//   }
// }
//
// const obj2 = {
//   run() {
//
//   }
// }


