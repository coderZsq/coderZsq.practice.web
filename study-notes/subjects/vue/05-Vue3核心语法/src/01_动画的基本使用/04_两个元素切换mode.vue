<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <div></div>
    <transition name="sq" mode="out-in">
      <h2 class="title" v-if="isShow">Hello World</h2>
      <h2 class="title" v-else>你好啊, 李银河</h2>
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
.app {
  width: 200px;
  margin: 0 auto;
}

.title {
  display: inline-block;
}

.sq-enter-from,
.sq-leave-to {
  opacity: 0;
}

.sq-enter-avtive,
.sq-leave-active {
  transition: opacity 1s ease;
}

.sq-enter-active {
  animation: bounce 1s ease;
}

.sq-leave-active {
  animation: bounce 1s ease reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
