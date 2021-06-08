<template>
  <div></div>
</template>

<script>
import emitter from './utils/eventbus';
export default {
  created() {
    emitter.on('sq', (info) => {
      console.log('sq:', info);
    });

    emitter.on('kobe', (info) => {
      console.log('kobe:', info);
    });

    emitter.on('*', (type, info) => {
      console.log('* listener:', type, info);
    });
  },
};
</script>

<style scoped></style>
