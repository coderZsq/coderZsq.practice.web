<template>
<div>
  <div class="nav">
    <div class="content">
      <div class="title">
        Castie!
      </div>
      <div class="items">
        <span>Home</span>
        <span>Projects</span>
        <span>GitHub</span>
        <span>Article</span>
        <span>Experience</span>
        <span>Contact</span>
      </div>
    </div>
  </div>
  <div class="nav-offset">

  </div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 50px;
  z-index: 1;
}

.nav-offset {
  height: 50px;
}

.nav .content {
  margin: 0 auto;
  width: 1000px;
  height: inherit;
}

.nav .content .title {
  line-height: 50px;
  font-size: 28px;
  display: inline-block;
  text-indent: 40px;
  color: white;
}

.nav .content .items {
  line-height: 50px;
  width: 700px;
  display: inline-block;
  float: right;
}

.nav .content .items span {
  width: 108px;
  text-align: center;
  line-height: 50px;
  display: inline-block;
  color: white;
}
</style>
