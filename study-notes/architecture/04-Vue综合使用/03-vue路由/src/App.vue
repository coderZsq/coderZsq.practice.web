<template>
  <div id="app">
    <!-- 设置固定的标签, 这个标签一般最终会解析成a标签 -->
    <router-link to="/home">首页</router-link>
    <router-link :to="{path: '/user', query: {name: 'Castie!', age: 18}}">用户</router-link>
    <router-link :to="'/profile/' + proId">档案</router-link>
    <button @click="homeClick">homeClick</button>
    <button @click="userClick">userClick</button>
    <button @click="profileClick">profileClick</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      proId: "Castie!"
    };
  },
  methods: {
    homeClick() {
      this.$router.push({
        path: "/home"
      });
    },
    userClick() {
      this.$router.push({
        path: "/user",
        query: {
          name: "Castie!",
          age: 18
        }
      });
    },
    profileClick() {
      console.log(this);
      this.$router.push({
        path: `/profile/${this.proId}`
      });
    }
  }
};
</script>

<style>
</style>
