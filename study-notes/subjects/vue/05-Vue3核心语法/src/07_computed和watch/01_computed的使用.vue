<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改firstName</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const firstName = ref('Kobe');
    const lastName = ref('Bryant');

    // 1. 用法一: 传入一个getter函数
    // computed的返回值是一个ref对象
    // const fullName = computed(() => firstName.value + ' ' + lastName.value);

    // 2. 用法二: 传入一个对象, 对象包含getter/setter
    const fullName = computed({
      get: () => firstName.value + ' ' + lastName.value,
      set(newValue) {
        const names = newValue.split(' ');
        firstName.value = names[0];
        lastName.value = names[1];
      },
    });

    const changeName = () => {
      // firstName.value = 'James';
      fullName.value = 'coder Zsq';
    };
    return {
      fullName,
      changeName,
    };
  },
};
</script>

<style scoped></style>