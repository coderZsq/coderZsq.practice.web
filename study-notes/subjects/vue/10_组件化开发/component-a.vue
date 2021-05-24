<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ desc }}</p>
    <button @click="btnClick">按钮点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '我是标题',
      desc: '我是内容, 哈哈哈哈哈',
    };
  },
  methods: {
    btnClick() {
      console.log('按钮的点击');
    },
  },
};
</script>

<style scoped></style>
