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
    const info = reactive({ name: 'sq', age: 18 });

    // 1. 侦听watch时, 传入一个getter函数
    // watch(
    //   () => info.name,
    //   (newValue, oldValue) => {
    //     console.log('newValue:', newValue, 'oldValue:', oldValue);
    //   }
    // );

    // 2. 传入一个可响应对象: reactive对象/ref对象
    // 情况一: reactive对象获取到的newValue和oldValue本身都是reactive对象
    // watch(info, (newValue, oldValue) => {
    //   console.log('newValue:', newValue, 'oldValue:', oldValue);
    // });
    watch(
      () => {
        return { ...info };
      },
      (newValue, oldValue) => {
        console.log('newValue:', newValue, 'oldValue:', oldValue);
      }
    );

    // 情况二: ref对象获取newValue和oldValue是value值的本身
    // const name = ref('sq');
    // watch(name, (newValue, oldValue) => {
    //   console.log('newValue:', newValue, 'oldValue', oldValue);
    // });

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
