<template>
  <div>
    <h2>我是首页</h2>
    <router-link to="/home/message">message</router-link>
    <router-link to="/home/info">info</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
