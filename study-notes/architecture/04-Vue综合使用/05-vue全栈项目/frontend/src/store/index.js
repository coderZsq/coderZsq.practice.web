import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// vuex存储的数据, 如果我们刷新页面后, 对应的数据就会消失
const store = new Vuex.Store({
  state: {
    userInfo: JSON.parse(localStorage.getItem('userinfo'))
  },
  mutations: {
    GET_USER(state, userInfo) {
      // 我们在初始化的时候, 就赋值数据, 但是这个数据记录我们需要在localstorage中记录
      localStorage.setItem('userinfo', JSON.stringify(userInfo))
      state.userInfo = userInfo
    }
  }
})

export default store