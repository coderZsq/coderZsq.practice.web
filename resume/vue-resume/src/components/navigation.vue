<template>
<div>
  <div class="nav">
    <div class="content">
      <div class="title">
        Castie!
      </div>
      <div class="items">
        <span @click="scrollTo('home')"><a>Home</a></span>
        <span @click="scrollTo('projects')"><a>Projects</a></span>
        <span @click="scrollTo('github')"><a>GitHub</a></span>
        <span @click="scrollTo('articles')"><a>Articles</a></span>
        <span @click="scrollTo('experience')"><a>Experience</a></span>
        <span @click="scrollTo('contact')"><a>Contact</a></span>
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
    $h: function(id) {
      return document.getElementById(id).offsetHeight;
    },
    scrollTo: function(param) {
      let offset;
      if (param === "home") {
        offset = 0;
      } else if (param === "projects") {
        offset = this.$h("home");
      } else if (param === "github") {
        offset = this.$h("projects") + this.$h("home");
      } else if (param === "articles") {
        offset = this.$h("github") + this.$h("projects") + this.$h("home");
      } else if (param === "experience") {
        offset = this.$h("articles") + this.$h("github") + this.$h("projects") + this.$h("home");
      } else if (param === "contact") {
        offset = this.$h("experience") + this.$h("articles") + this.$h("github") + this.$h("projects") + this.$h("home");
      }
      window.scrollTo(0, offset);
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
  user-select: none;
}

.nav .content .items {
  line-height: 50px;
  height: 50px;
  width: 700px;
  display: inline-block;
  float: right;
  user-select: none;
}

.nav .content .items span {
  width: 108px;
  text-align: center;
  line-height: 50px;
  display: inline-block;
  color: white;
  cursor: pointer;
  user-select: none;
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
