<template>
  <div>
    <!--<button @click="btnClick">按钮</button>-->
    <h2 ref="title">{{name}}</h2>
    <middle :name="name" :age="age" :height="height" @cClick="btnClick"/>
  </div>
</template>

<script>
  import Middle from './Middle'

  export default {
    name: "Profile",
    components: {
      Middle
    },
    data() {
      return {
        name: 'why',
        age: 18,
        height: 1.88
      }
    },
    computed: {
      totalPrice() {
        return '1111111111'
      }
    },
    methods: {
      test() {
        console.log('test');
      },
      demo() {
        console.log('demo');
      },
      btnClick() {
        // this.name = 'kobe'
        console.log('btnClick');
      }
    },

    // methods/computed/data都是不可用
    beforeCreate() {
      console.log('beforeCreate');

      // console.log(this.name);
      // console.log(this.age);
      // console.log(this.height);
      // console.log(this.totalPrice);
      // this.test()
      // this.demo()
    },
    // 注意: 是不可以进行DOM操作
    created() {
      console.log('created');

      console.log(this.name);
      console.log(this.age);
      console.log(this.height);
      console.log(this.totalPrice);
      this.test()
      this.demo()

      // console.log(this.$refs.title);
    },
    beforeMount() {
      console.log('beforeMount');

      // console.log(this.$refs.title);
    },
    mounted() {
      console.log('mounted');

      console.log(this.$refs.title);
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    },
    beforeDestroy() {
      console.log('beforeDestroy');
    },
    destroyed() {
      console.log('destroyed');
    },

    // keep-alive:
    activated() {
      console.log('activated');
    },
    deactivated() {
      console.log('deactivated');
    }
  }
</script>

<style scoped>
</style>
