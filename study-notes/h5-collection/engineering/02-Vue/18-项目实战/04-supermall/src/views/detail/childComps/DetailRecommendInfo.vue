<template>
  <div class="recommend">
    <goods-list :goods="recommends"/>
  </div>
</template>

<script>
  import GoodsList from 'components/content/goods/GoodsList'

  export default {
    name: "DetailRecommendInfo",
    components: {
      GoodsList
    },
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
