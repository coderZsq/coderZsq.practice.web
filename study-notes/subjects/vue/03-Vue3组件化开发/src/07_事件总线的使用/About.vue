<template>
  <div>
    <button @click="btnClick">按钮点击</button>
  </div>
</template>

<script>
import emitter from './utils/eventbus';

export default {
  methods: {
    btnClick() {
      console.log('about按钮的点击');
      emitter.emit('sq', { name: 'sq', age: 18 });
      // emitter.emit('kobe', { name: 'kobe', age: 30 });
    },
  },
};
</script>

<style scoped></style>
