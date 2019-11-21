<template>
  <div>
    <h2>我是children的标题</h2>
    <div>{{name}}</div>
    <div>{{age}}</div>
    <div>{{height}}</div>

    <button @click="$emit('cClick')">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "Children",
    props: {
      name: String,
      age: Number,
      height: Number
    }
  }
</script>

<style scoped>

</style>
