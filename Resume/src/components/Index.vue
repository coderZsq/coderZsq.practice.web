<template>
<div>
  <navigation></navigation>
  <div class="odd">
    <div class="content">
      <home></home>
    </div>
  </div>
  <div class="even">
    <div class="content">
      <div class="subtitle">

      </div>
      <div class="projects">
        <div class="projects-block">
          <div class="project1">

          </div>
          <div class="project2">

          </div>
          <div class="project3">

          </div>
          <div class="project4">

          </div>
        </div>
      </div>
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
import navigation from './navigation'
import home from './home'
export default {
  data() {
    return {

    }
  },
  components: {
    navigation,
    home
  }
}
</script>

<style scoped>
.even {
  width: 100%;
  height: 600px;
  background-color: #f8f8f8;
}

.odd {
  width: 100%;
  height: 600px;
  background-color: white;
}

.content {
  margin: 0 auto;
  width: 1000px;
  height: inherit;
  /*border: 1px solid gray;*/
}

.subtitle {
  margin-top: 50px;
  /*background-color: rgba(230, 230, 230, 1);*/
  width: 300px;
  height: 60px;
  display: inline-block;
}

.projects {
  /*background-color: rgba(240, 240, 240, 1);*/
  height: inherit;
  width: 700px;
  float: right;
  display: inline-block;
  position: relative;
}

.projects .projects-block {
  position: absolute;
  width: 680px;
  height: 500px;
  top: calc(50% - 250px);
  left: calc(50% - 340px);
  /*background-color: rgba(230, 230, 230, 1);*/
}

.projects .projects-block .project1,
.projects .projects-block .project2,
.projects .projects-block .project3,
.projects .projects-block .project4 {
  /*background-color: pink;*/
  width: 340px;
  height: 250px;
  float: left;
}
</style>
