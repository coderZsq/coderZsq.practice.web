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
import projects from './projects'
export default {
  data() {
    return {

    }
  },
  components: {
    navigation,
    home,
    projects
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
  background-color: #fff;
}

.content {
  margin: 0 auto;
  width: 1000px;
  height: inherit;
  /*border: 1px solid gray;*/
}
</style>
