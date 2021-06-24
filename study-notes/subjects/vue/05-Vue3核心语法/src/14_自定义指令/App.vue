<template>
  <div>
    <button v-if="counter < 2" v-sq @click="increment">
      当前计数: {{ counter }}
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  // 局部指令
  directives: {
    sq: {
      created(el, bindings, vnode, preVnode) {
        console.log('sq created', el, bindings, vnode, preVnode);
      },
      beforeMount() {
        console.log('sq beforeMount');
      },
      mounted() {
        console.log('sq mounted');
      },
      beforeUpdate() {
        console.log('sq beforeUpdate');
      },
      updated() {
        console.log('sq updated');
      },
      beforeUnmount() {
        console.log('sq beforeUnmount');
      },
      unmounted() {
        console.log('sq unmounted');
      },
    },
  },
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;
    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
