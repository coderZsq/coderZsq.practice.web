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
      <projects></projects>
    </div>
  </div>
  <div class="odd">
    <div class="content">
      <github></github>
    </div>
  </div>
  <div class="articles">
    <div class="content">
      <articles></articles>
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
import projects from './projects'
import github from './github'
import articles from './articles'
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
    articles
  }
}
</script>

<style scoped>
.even {
  width: 100%;
  height: 600px;
  background-color: #fafafa;
}

.odd {
  width: 100%;
  height: 600px;
  background-color: #fff;
}

.articles {
  width: 100%;
  height: 1130px;
  background-color: #fafafa;
}

.content {
  margin: 0 auto;
  width: 1000px;
  height: inherit;
  /*border: 1px solid gray;*/
}
</style>
