import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建Vuex.Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      // state.cartList.push(payload)
      // 1.判断cartList是否已经包含payload
      // let oldInfo = null
      // for (let i in state.cartList) {
      //   if (state.cartList[i].iid === payload.iid) {
      //     oldInfo = state.cartList[i]
      //   }
      // }
      // const oldInfo = state.cartList.find((item) => {
      //   return item.iid === payload.iid
      // })
      const oldInfo = state.cartList.find(item => item.iid === payload.iid)

      // 2.判断oldInfo是否有值
      if (oldInfo) { // 已有商品
        oldInfo.count += 1
      } else { // 新商品
        payload.count = 1
        state.cartList.push(payload)
      }
    }
  }
})

// 3.导出store对象
export default store
