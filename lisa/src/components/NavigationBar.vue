<template>
  <div>
    <div class="navigation-warpper">
      <img class="navigation-icon" src="../assets/images/logo.png" />
      <ul class="navigation-tabs">
        <li>HOME</li>
        <li>WORK</li>
        <li>LIFE</li>
        <li>TOUGHTS</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navigation-warpper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
}

.navigation-warpper .navigation-icon {
  width: 44px;
  height: 44px;
  margin-left: 20px;
  vertical-align: middle;
}

.navigation-warpper .navigation-tabs {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 100px;
  list-style: none;
  width: 400px;
  color: #fff;
  font-size: 22px;
}
</style>