import Vue from 'vue'
import Vuex from 'vuex'

// 1. 设置使用vuex
Vue.use(Vuex)
// 2. 创建对象
const store = new Vuex.Store({
  /**
   * 放置对应的四个对象
   * state
   * getters
   * mutattions
   * actions
   */
  state: {
    counter: 20,
    students: [
      {
        id: 1,
        name: "Castie!",
        age: 20
      },
      {
        id: 1,
        name: "Castie!",
        age: 21
      },
      {
        id: 1,
        name: "Castie!",
        age: 22
      }
    ],
    info: {
      username: "admin",
      password: "admin"
    }
  },
  getters: {
    /**
     * 一般都是函数, 用来操作对应的state中的数据, 但是一般我们只是通过这个 getters 中的函数来获取数据, 不做其他设置
     * 一般对应的方法只能传递state参数, 不能传递其他参数
     */
    getData(state) {
      return state.students
    },
    getAgeData(state) {
      return (age) => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  mutations: {
    // updateData(state, counter) {
    //   setTimeout(function () {
    //     state.counter = counter
    //   }, 1000)
    // },
    updateData(state, counter) {
      state.counter = counter
    }
  },
  actions: {
    /**
     * 做对应的操作数据, 对象也是函数, 但是不能直接操控state
     * 一般我们这里做的都是异步操作, 例如发送请求
     * 具体实现, 我们需要通过提交mutations中的方法来设置对数据的操控
     */
    aUpdateData(ctx, counter) {
      // actions的函数的返回值一般都是一个promise
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          // 提交对应mutations中的函数
          ctx.commit('updateData', 10)
          resolve(counter)
        })
      })
    }
  }
})

// 暴露
export default store