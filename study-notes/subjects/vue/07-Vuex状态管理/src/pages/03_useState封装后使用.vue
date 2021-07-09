<template>
  <div>
    <h2>Home: {{ $store.state.counter }}</h2>
    <hr />
    <h2>{{ counter }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ height }}</h2>
    <h2>{{ sCounter }}</h2>
    <h2>{{ sName }}</h2>
    <hr />
  </div>
</template>

<script>
import { useState } from '../hooks/useState';
export default {
  setup() {
    const storeState = useState(['counter', 'name', 'age', 'height']);
    const storeState2 = useState({
      sCounter: (state) => state.counter,
      sName: (state) => state.name,
    });

    return {
      ...storeState,
      ...storeState2,
    };
  },
};
</script>

<style scoped></style>
