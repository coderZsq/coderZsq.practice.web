<template>
<div class="career">
  <div class="career-block">
    <h2>{{time}}</h2>
    <p>{{job}}, <a target="_blank" :href="href">{{corp}}</a>, Shanghai</p>
    <ul>
      <li>{{desc1}}</li>
      <li>{{desc2}}</li>
      <li>{{desc3}}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    time: String,
    job: String,
    corp: String,
    href: String,
    desc1: String,
    desc2: String,
    desc3: String
  }
}
</script>

<style scoped>
.career {
  width: 680px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  height: 240px;
  float: left;
  border-radius: 12px;
}

.career-block {
  padding-top: 10px;
  height: 230px;
  width: inherit;
  border-radius: 12px;
  position: relative;
  background-color: #f8f8f8;
}

.career-block:hover {
  box-shadow: 1px 1px 7px #ccc;
}

.career-block h2 {
  color: #444;
  position: absolute;
  top: 30px;
  left: 30px;
}

.career-block p {
  color: #666;
  position: absolute;
  top: 70px;
  left: 30px;
  font-size: 21px;
}

.career-block ul {
  position: absolute;
  top: 110px;
  left: 30px;
}

.career-block li {
  color: #555;
  height: 32px;
  list-style-type: none;
  font-size: 20px;
}

.career-block a,
.career-block a:link,
.rcareer-blockow a:visited {
  text-decoration: none;
  color: #3385ff;
}

.career-block a:hover {
  text-decoration: none;
  color: #3385ff;
}
</style>
