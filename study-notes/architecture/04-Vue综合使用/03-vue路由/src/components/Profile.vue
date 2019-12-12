<template>
  <div>
    <h2>我是profile组件</h2>
    <h2>{{$route.params.id}}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
