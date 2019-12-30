<template>
  <div class="container">
    <div class="home-wrapper">
      <navigation-bar></navigation-bar>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
export default {
  name: "home",
  components: { NavigationBar }
};
</script>

<style scoped>
.container {
  background-color: #2ebfad;
  height: 100vh;
}
</style>>
