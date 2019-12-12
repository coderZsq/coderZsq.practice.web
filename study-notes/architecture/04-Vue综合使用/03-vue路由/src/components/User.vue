<template>
  <div>
    <h2>我是user组件</h2>
    <h2>{{$route.query.name}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
