<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    let counter = 100;
    // 局部函数
    const increment = () => {
      counter++;
      console.log(counter);
    };
    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
