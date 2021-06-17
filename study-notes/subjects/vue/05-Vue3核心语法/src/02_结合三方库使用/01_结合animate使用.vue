<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <div></div>
    <transition
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__flipInY"
    >
      <h2 class="title" v-if="isShow">Hello World</h2>
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
.title {
  display: inline-block;
}

.animate__flipInY {
  animation-direction: reverse;
}

/* .sq-enter-active {
  animation: bounceInUp 1s ease-in;
}

.sq-leave-active {
  animation: bounceInUp 1s ease-in reverse;
} */
</style>
