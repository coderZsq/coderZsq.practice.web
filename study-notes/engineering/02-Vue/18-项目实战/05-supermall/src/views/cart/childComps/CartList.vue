<template>
  <div class="cart-list">
    <scroll>
      <cart-list-item v-for="item in cartList" :item-info="item"/>
    </scroll>
  </div>
</template>

<script>
  import CartListItem from './CartListItem'

  import Scroll from 'components/common/scroll/Scroll'

  import {mapGetters} from 'vuex'

  export default {
    name: "CartList",
    components: {
      CartListItem,
      Scroll
    },
    computed: {
      ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>

</style>
