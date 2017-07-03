<template>
<div>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">Resume - coderZsq</el-menu-item>
    <div class="items">
      <el-menu-item index="2"><a href="#" target="_blank">Home</a></el-menu-item>
      <el-menu-item index="3"><a href="#" target="_blank">Project</a></el-menu-item>
      <el-menu-item index="4"><a href="#" target="_blank">Blog</a></el-menu-item>
      <el-menu-item index="5"><a href="#" target="_blank">GitHub</a></el-menu-item>
      <el-menu-item index="6"><a href="#" target="_blank">Experience</a></el-menu-item>
      <el-menu-item index="7"><a href="#" target="_blank">Contact</a></el-menu-item>
    </div>
  </el-menu>
  <div class="nav-offset"></div>

  <div class="odd">
    <div class="content">
      <div class="profile">
        <img src="../assets/logo.png" alt="">
        <div class="name">Shuang quan</div>
        <div class="job">iOS Developer</div>
        <div class="nickname">Castie! (@coderZsq)</div>
        <div class="social"></div>
      </div>
    </div>
  </div>
  <div class="even">
    <div class="content">

    </div>
  </div>
  <div class="odd">
    <div class="content">

    </div>
  </div>
  <div class="even">
    <div class="content">

    </div>
  </div>
  <div class="odd">
    <div class="content">

    </div>
  </div>
  <div class="even">
    <div class="content">

    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.el-menu {
  padding-left: 15%;
  padding-right: 15%;
  width: 70%;
  position: fixed;
  height: 60px;
}

.nav-offset {
  height: 60px;
}

.items {
  float: right;
}

.even {
  width: 100%;
  height: 600px;
  background-color: rgba(248, 248, 248, 1);
}

.odd {
  width: 100%;
  height: 600px;
  background-color: white;
}

.content {
  margin-left: 15%;
  margin-right: 15%;
  height: inherit;
}

.profile {
  padding-top: 10%;
  width: 30%;
  text-align: center;
  height: inherit;
  background-color: rgba(248, 248, 248, 1);
}

.profile img {
  width: 90%;
  padding-left: 5%;
}

.profile .name {
  text-align: inherit;
  font-size: 28px;
}

.profile .job {
  text-align: inherit;
  font-size: 20px;
  color: lightgray;
}

.profile .nickname {
  text-align: inherit;
  font-size: 24px;
  color: rgba(1, 149, 235, 1);
}

.profile .social {
  background-color: rgba(1, 149, 235, 1);
  width: 100%;
  height: 40px;
}
</style>
