<template>
  <div>
    <button @click="increment">{{ counter }}</button>
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted, ref } from 'vue';
export default {
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;

    onMounted(() => {
      console.log('App Mounted1');
    });
    onMounted(() => {
      console.log('App Mounted2');
    });
    onUpdated(() => {
      console.log('App Updated');
    });
    onUnmounted(() => {
      console.log('App Unmounted');
    });
    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
