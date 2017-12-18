<template>
<div>
  <navigation></navigation>
  <div class="odd">
    <div id="home" class="content">
      <home></home>
    </div>
  </div>
  <div id="projects" class="even">
    <div class="content">
      <projects></projects>
    </div>
  </div>
  <div id="github" class="odd">
    <div class="content">
      <github></github>
    </div>
  </div>
  <div id="articles" class="even">
    <div class="content">
      <articles></articles>
    </div>
  </div>
  <div id="experience" class="odd">
    <div class="content">
      <experience></experience>
    </div>
  </div>
  <div id="contact" class="even">
    <div class="content">
      <contact></contact>
    </div>
  </div>
</div>
</template>

<script>
import navigation from './navigation'
import home from './home'
import projects from './projects'
import github from './github'
import articles from './articles'
import experience from './experience'
import contact from './contact'
export default {
  data() {
    return {

    }
  },
  components: {
    navigation,
    home,
    projects,
    github,
    articles,
    experience,
    contact
  }
}
</script>

<style scoped>
.even {
  width: 100%;
  overflow: hidden;
  background-color: #fafafa;
}

.odd {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}

.content {
  margin: 0 auto;
  width: 1000px;
  min-height: 320px;
}
</style>
