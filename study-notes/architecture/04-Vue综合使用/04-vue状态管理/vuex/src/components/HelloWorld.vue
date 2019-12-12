<template>
  <div class="hello">
    <h2>{{this.$store.state.counter}}</h2>
    <h2>{{this.$store.getters.getData}}</h2>
    <button @click="btnClick">修改</button>
    <button @click="btnClick2">修改actions</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    btnClick() {
      /**
       * 所有的mutations中的方法想要调用, 我们一般不直接调用
       * 我们需要通过state的commit方法来提交对应的函数
       * commit第一个表示函数的名称, 第二个表示对应的传递的具体的参数值
       */
      this.$store.commit("updateData", 30);
    },
    btnClick2() {
      /**
       * 如果我们想要调用actions中的函数, 一般我们需要使用dispatch方法
       */
      this.$store.dispatch("aUpdateData", 10).then(function(data) {
        console.log(data);
      });
    }
  }
};
</script>

<style scoped>
</style>
