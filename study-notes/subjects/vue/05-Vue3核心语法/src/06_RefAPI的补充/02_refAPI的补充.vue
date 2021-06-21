<template>
  <div>
    <h2>{{ info }}</h2>
    <button @click="changeInfo">修改Info</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const info = ref({ name: 'sq' });

    const changeInfo = () => {
      info.value.name = 'james';
    };

    return {
      info,
      changeInfo,
    };
  },
};
</script>

<style scoped></style>
