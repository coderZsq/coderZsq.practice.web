<template>
  <div id="app">
    <Login></Login>
  </div>
</template>

<script>
import Login from "./components/Login";

export default {
  name: "App",
  components: {
    Login
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}
</style>
