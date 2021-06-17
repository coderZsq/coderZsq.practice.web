<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="sq">
      <h2 v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.sq-enter-from,
.sq-leave-to {
  opacity: 0;
}

.sq-enter-to,
.sq-leave-from {
  opacity: 1;
}

.sq-enter-active,
.sq-leave-active {
  transition: opacity 2s ease;
}
</style>
