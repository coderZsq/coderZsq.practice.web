<template>
  <div>
    <h2 ref="title">{{ info.name }}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';

export default {
  setup() {
    // 1. 定义可响应式的对象
    const info = reactive({ name: 'sq', age: 18 });
    const name = ref('sq');

    // 2. 侦听器watch
    watch(
      [() => ({ ...info }), name],
      ([newInfo, newName], [oldInfo, oldName]) => {
        console.log(newInfo, newName, oldInfo, oldName);
      }
    );

    const changeData = () => {
      info.name = 'kobe';
    };

    return {
      changeData,
      info,
    };
  },
};
</script>

<style scoped></style>
