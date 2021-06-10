<template>
  <div>
    <!-- <input v-model="message" />
    <input :value="message" @input="message = $event.target.value" /> -->

    <!-- 组件上使用v-model -->
    <!-- <sq-input v-model="message"></sq-input> -->
    <!-- <sq-input
      :modelValue="message"
      @update:model-value="message = $event"
    ></sq-input> -->

    <!-- 绑定两个v-model -->
    <sq-input v-model="message" v-model:title="title"></sq-input>

    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import SqInput from './SqInput.vue';

export default {
  components: {
    SqInput,
  },
  data() {
    return {
      message: 'Hello World',
      title: '哈哈哈',
    };
  },
};
</script>

<style scoped></style>
