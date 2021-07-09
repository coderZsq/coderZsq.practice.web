<template>
  <div>
    <h2>Home: {{ $store.state.counter }}</h2>
    <h2>Home: {{ sCounter }}</h2>
    <h2>Home: {{ sName }}</h2>
    <!-- <h2>Home: {{ age }}</h2>
    <h2>Home: {{ height }}</h2> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    fullName() {
      return 'Kobe Bryant';
    },
    // 其他的计算属性, 从state获取
    // ...mapState(['counter', 'name', 'age', 'height']),
    ...mapState({
      sCounter: (state) => state.counter,
      sName: (state) => state.name,
    }),
  },
};
</script>

<style scoped></style>
