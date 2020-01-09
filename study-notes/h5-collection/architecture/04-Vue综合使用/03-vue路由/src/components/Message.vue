<template>
  <div>
    <h2>我是home的消息组件</h2>
    <h2>{{$route.query.name}}</h2>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
