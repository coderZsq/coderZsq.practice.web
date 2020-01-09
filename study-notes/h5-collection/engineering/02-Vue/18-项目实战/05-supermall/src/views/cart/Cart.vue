<template>
  <div class="cart">
    <!--1.导航栏-->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!--2.购物车列表-->
    <cart-list/>

    <!--3.汇总底部工具栏-->
    <cart-bottom-bar/>
  </div>
</template>

<script>
  // map -> 映射
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'

  import NavBar from 'components/common/navbar/NavBar'
  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      CartList,
      CartBottomBar,
      NavBar
    },
    computed: {
      // ...mapGetters(['cartLength'])
      ...mapGetters({
        'length': 'cartLength'
      })
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
