import {
  ADD_TO_CART,
  INCREMENT_COUNT
} from './mutation-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 1.判断cartList是否已经包含payload
      const oldInfo = context.state.cartList.find(item => item.iid === payload.iid)

      // 2.判断oldInfo是否有值
      if (oldInfo) { // 已有商品
        // oldInfo.count += 1
        context.commit(INCREMENT_COUNT, oldInfo)
        resolve('该商品已经存在,数量+1')
      } else { // 新商品
        payload.count = 1
        payload.checked = true
        context.commit(ADD_TO_CART, payload)
        resolve('将新商品添加到购物车')
      }
    })
  }
}
