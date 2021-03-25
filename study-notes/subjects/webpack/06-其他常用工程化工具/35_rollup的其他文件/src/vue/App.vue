<template>
  <div id="app">
    <h2 class="title">{{ message }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue',
    };
  },
};
</script>

<style scoped>
.title {
  color: white;
}
</style>
