import {
    ADD_TO_CART,
    INCREMENT_COUNT
  } from './mutation-types'

export default {
  // Vuex中mutations设计原则: 每一个方法完成的事情尽可能的单一(不进行复杂的操作)
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  },
  [INCREMENT_COUNT](state, payload) {
    payload.count += 1
  }
}
