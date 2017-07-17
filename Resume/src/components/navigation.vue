<template>
<div>
  <div class="nav">
    <div class="content">
      <div class="title">
        Castie!
      </div>
      <div class="items">
        <span @click="goHome"><a>Home</a></span>
        <span @click="goProjects"><a>Projects</a></span>
        <span @click="goGitHub"><a>GitHub</a></span>
        <span @click="goArticles"><a>Articles</a></span>
        <span @click="goExperience"><a>Experience</a></span>
        <span @click="goContact"><a>Contact</a></span>
      </div>
    </div>
  </div>
  <div class="nav-offset">

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goHome: function() {
      window.scrollTo(0, 0);
    },
    goProjects: function() {
      window.scrollTo(0, 600);
    },
    goGitHub: function() {
      window.scrollTo(0, 1200);
    },
    goArticles: function() {
      window.scrollTo(0, 1800);
    },
    goExperience: function() {
      window.scrollTo(0, 2930);
    },
    goContact: function() {
      window.scrollTo(0, 3530);
    }
  }
}
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

.nav a,
.nav a:link,
.nav a:visited {
  text-decoration: none;
  color: #fff;
}


.nav a:hover {
  color: #aaa;
}
</style>
