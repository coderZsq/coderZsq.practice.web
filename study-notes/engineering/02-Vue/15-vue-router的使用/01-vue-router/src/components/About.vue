<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容, 呵呵呵</p>
  </div>
</template>

<script>
  export default {
    name: "About",
    created() {
      console.log('About created');
    },
    destroyed() {
      console.log('About destroyed');
    }
  }
</script>

<style scoped>

</style>
