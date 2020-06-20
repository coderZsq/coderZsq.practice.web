<template>
  <div class="bottom-menu">
    <check-button class="select-all" @checkBtnClick="checkBtnClick" :value="isSelectAll"/>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product">去计算({{checkedLength}})</span>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'

  import {mapGetters} from 'vuex'

	export default {
		name: "BottomBar",
    components: {
		  CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
		  isSelectAll() {
        for (let item of this.cartList) {
          if (!item.checked) {
            return false
          }
        }
        return true
        // const item = this.cartList.find(item => !item.checked);
        // return item === undefined
      },
      checkedLength() {
        // let total = 0
        // for (let item of this.cartList) {
        //   if (item.checked) {
        //     total += 1
        //   }
        // }
        // return total
        return this.cartList.filter(item => item.checked).length
      },
      totalPrice() {
        // let total = 0
        // for (let item of this.cartList) {
        //   if (item.checked) {
        //     total += item.price * item.count
        //   }
        // }
        // return total.toFixed(2)

        return this.cartList
                  .filter(item => item.checked)
                  .reduce((preValue, item) => {
                    return preValue + item.price * item.count
                  }, 0).toFixed(2)
      }
    },
    methods: {
      checkBtnClick() {
        if (this.isSelectAll) { // 所有的商品都是选中状态
          // 让所有的商品变成不选中状态
          this.cartList.forEach(item => item.checked = false)
        } else { // 存在某些商品是不选中
          this.cartList.forEach(item => item.checked = true)
        }
        // this.cartList.forEach(item => {
        //   item.checked = !this.isSelectAll
        // })
      }
    }
	}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
