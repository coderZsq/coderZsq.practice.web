<template>
  <div>
    <h2>我是middle的标题</h2>
    <!--<children :name="name" :age="age" :height="height"/>-->
    <children v-bind="$attrs" v-on="$listeners"/>
  </div>
</template>

<script>
  import Children from './Children'

  export default {
    name: "Middle",
    components: {
      Children
    },
    mounted() {
      // name: "why", age: 18, height: 1.88
      console.log(this.$attrs);
    },
    inheritAttrs: false
    // props: {
    //   name: String,
    //   age: Number,
    //   height: Number
    // }
  }
</script>

<style scoped>

</style>
