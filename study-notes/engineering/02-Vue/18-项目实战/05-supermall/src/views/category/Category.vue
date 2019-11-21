<template>
  <div class="category">
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Category",
    components: {
    },
    data() {
      return {
        scroll: null
      }
    },
    methods: {
      btnClick() {
        this.$toast()
      },
      divClick() {
        console.log('divClick');
      }
    },

  }
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;

    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>
