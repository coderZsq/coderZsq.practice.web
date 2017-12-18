<template>
<div class="project">
  <div class="project-block">
    <div class="icon">
      <a :href="href"><img :src="src" alt=""></a>
    </div>
    <div class="download">
      <a :href="href">Download</a>
    </div>
    <div class="title">
      <h2>{{name}}</h2>
      <p>{{description}}</p>
    </div>
    <div class="desc">
      <ul>
        <li>{{text1}}</li>
        <li>{{text2}}</li>
        <li>{{text3}}</li>
      </ul>
    </div>
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
    src: String,
    href: String,
    name: String,
    description: String,
    text1: String,
    text2: String,
    text3: String
  }
}
</script>

<style scoped>
.project {
  background-color: #fff;
  width: 330px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  height: 240px;
  float: left;
  border-radius: 12px;
}

.project-block {
  height: inherit;
  width: inherit;
  border-radius: 12px;
  position: relative;
  display: inline-block;
}

.project-block:hover {
  box-shadow: 1px 1px 15px #ddd;
}

.icon {
  position: absolute;
  background-color: #f8f8f8;
  top: 20px;
  left: 20px;
  width: 80px;
  height: 80px;
  border-radius: 20px;
}

.icon img {
  width: 80px;
  height: 80px;
}

.download {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 330px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #3385ff;
  color: #fff;
  font-size: 20px;
}

.download a,
.download a:link,
.download a:visited,
.download a:hover {
  text-decoration: none;
  color: #fff;
}

.title {
  position: absolute;
  width: 200px;
  height: 120px;
  left: 117.5px;
  top: 10px;
}

.title h2 {
  color: #555;
  margin-top: 14px;
  height: 30px;
  line-height: 30px;
}

.title p {
  color: #999;
}

.desc {
  position: absolute;
  width: 300px;
  height: 80px;
  left: 20px;
  top: 115px;
  font-size: 17px;
}

.desc li {
  list-style-type: none;
  color: #444;
}
</style>
