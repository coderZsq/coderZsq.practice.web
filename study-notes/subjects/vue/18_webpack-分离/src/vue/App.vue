<template id="my-app">
  <h2>我是Vue渲染出来的</h2>
  <h2>{{ title }}</h2>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from './HelloWorld';

export default {
  components: { HelloWorld },
  data() {
    return {
      title: 'Hello World, hahahaah',
      message: 'hehehe',
    };
  },
  methods: {},
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>
