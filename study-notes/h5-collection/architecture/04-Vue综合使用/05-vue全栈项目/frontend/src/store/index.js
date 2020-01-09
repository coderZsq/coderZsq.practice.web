import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// vuex存储的数据, 如果我们刷新页面后, 对应的数据就会消失
const store = new Vuex.Store({
  state: {
    userInfo: JSON.parse(localStorage.getItem('userinfo')),
    userlist: [] // 存储用户列表数据
  },
  getters: {
    agelist(state) {
      return state.userlist.filter(user => user.age > 18)
    }
  },
  mutations: {
    GET_USER(state, userInfo) {
      // 我们在初始化的时候, 就赋值数据, 但是这个数据记录我们需要在localstorage中记录
      localStorage.setItem('userinfo', JSON.stringify(userInfo))
      state.userInfo = userInfo
    },
    GET_LIST(state, userlist) {
      state.userlist = userlist
    }
  },
  actions: {
    // 处理对应的异步
    aGet_LIST(ctx, userlist) {
      return new Promise(function (resolve, reject) {
        axios.get('api/getlist').then(response => {
          ctx.commit('GET_LIST', response.data)
          resolve(response.data)
        })
      })
    }
  }
})

export default store