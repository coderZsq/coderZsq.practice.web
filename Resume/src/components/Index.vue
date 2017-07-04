<template>
<div>
  <navigation></navigation>
  <div class="odd">
    <div class="content">
      <div class="user">
        <div class="user-block">
          <div class="icon">

          </div>
          <div class="row1">

          </div>
          <div class="row2">

          </div>
          <div class="row3">

          </div>
          <div class="row4">

          </div>
        </div>
      </div>
      <div class="introduction">
        <div class="main">
          <div class="main-block">

          </div>
        </div>
        <div class="left">
          <div class="left-block">

          </div>
        </div>
        <div class="right">
          <div class="right-block">

          </div>
        </div>
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
import navigation from './navigation'
export default {
  data() {
    return {

    }
  },
  components: {
    navigation
  }
}
</script>

<style scoped>
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
  margin: 0 auto;
  width: 1000px;
  height: inherit;
  border: 1px solid gray;
}

.user {
  background-color: rgba(240, 240, 240, 1);
  width: 300px;
  height: inherit;
  display: inline-block;
  position: relative;
}

.user .user-block {
  position: absolute;
  width: 300px;
  height: 500px;
  top: calc(50% - 250px);
  background-color: rgba(210, 210, 210, 1);
}

.user .user-block .icon {
  margin: 0 auto;
  width: 280px;
  height: 280px;
  background-color: red;
  border-radius: 8px;
}

.user .user-block .row1,
.user .user-block .row2,
.user .user-block .row3,
.user .user-block .row4 {
  margin: 0 auto;
  margin-top: 8px;
  width: 280px;
  height: 40px;
  background-color: red;
}

.introduction {
  width: 700px;
  height: inherit;
  display: inline-block;
  float: right;
}

.introduction .main {
  background-color: rgba(230, 230, 230, 1);
  width: inherit;
  height: 350px;
  position: relative;
}

.introduction .main .main-block {
  background-color: orange;
  position: absolute;
  width: 680px;
  height: 330px;
  top: calc(50% - 165px);
  left: calc(50% - 340px);
}

.introduction .left {
  background-color: rgba(220, 220, 220, 1);
  width: 350px;
  height: 250px;
  display: inline-block;
  position: relative;
}

.introduction .left .left-block {
  background-color: blue;
  width: 330px;
  height: 250px;
  left: calc(50% - 165px);
  position: absolute;
}

.introduction .right {
  background-color: rgba(210, 210, 210, 1);
  width: 350px;
  height: 250px;
  float: right;
  display: inline-block;
  position: relative;
}

.introduction .right .right-block {
  background-color: green;
  width: 330px;
  height: 250px;
  left: calc(50% - 165px);
  position: absolute;
}
</style>
