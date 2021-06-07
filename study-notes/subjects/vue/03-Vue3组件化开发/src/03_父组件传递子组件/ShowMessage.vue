<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  // props: ['title', 'content'],
  props: {
    title: String,
    content: {
      type: String,
      required: true,
      default: '123',
    },
    counter: {
      type: Number,
    },
    info: {
      type: Object,
      default() {
        return { name: 'sq' };
      },
    },
    messageInfo: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
