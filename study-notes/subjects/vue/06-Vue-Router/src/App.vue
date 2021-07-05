<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/kobe/id/111">用户</router-link>

    <button @click="jumpToAbout">关于</button>
    <button @click="forwardOneStep">前进一步</button>

    <router-view />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  components: {},
  methods: {
    // jumpToAbout() {
    //   // router
    //   this.$router.push('/about');
    // },
  },
  setup() {
    const router = useRouter();

    const jumpToAbout = () => {
      // router.push('/about');
      // router.push({
      //   path: '/about',
      //   query: {
      //     name: 'sq',
      //     age: 18,
      //   },
      // });
      // router.replace('/about');
    };

    const forwardOneStep = () => {
      router.go(1);
      // router.go(-1);
      // router.forward();
      // router.back();
    };

    return {
      jumpToAbout,
    };
  },
};
</script>

<style>
.sq-active {
  color: red;
}
</style>
