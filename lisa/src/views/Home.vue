<template>
  <div class="container">
    <div class="home-wrapper">
      <navigation-bar></navigation-bar>
      <div class="description-warpper">
        <h1 class="title">Hi! I’m Sha Li.</h1>
        <div class="underline-warpper">
          <div class="progress-line"></div>
        </div>
        <p
          class="description"
        >I’m committed to improving the healthcare quality, empowered with the tool of data.</p>
      </div>
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

.description-warpper {
  margin-left: 50px;
}

@font-face {
  src: url("../assets/fonts/britannic.ttf");
  font-family: "britannic";
}

.description-warpper .title {
  margin-top: 120px;
  margin-bottom: 15px;
  font-size: 90px;
  color: #fff;
  font-family: "britannic";
}

.description-warpper .underline-warpper {
  width: 570px;
  height: 12px;
  background-color: #fff;
}

.description-warpper .underline-warpper .progress-line {
  width: 78%;
  height: inherit;
  background-color: #d59394;
}

.description-warpper .description {
  margin-top: 100px;
  font-size: 60px;
  color: #fff;
  font-family: "britannic";
}
</style>>
