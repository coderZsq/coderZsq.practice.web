<template>
  <div id="app">
    <div>{{result}}</div>
    <h2>-----------------------------------|</h2>
    <hello-world/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'

  import axios from 'axios'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data() {
      return {
        result: ''
      }
    },
    created() {
      axios({
        url: 'http://123.207.32.32:8000/home/multidata'
      }).then(res => {
        // console.log(res);
        this.result = res;
      })
    }
  }
</script>

<style>

</style>
