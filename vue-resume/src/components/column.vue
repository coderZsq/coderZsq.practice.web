<template>
<div class="column">
  <div class="column-block">
    <div class="column-list">
      <div class="row" v-for="article in articles">
        <a :href="article.href">{{article.name}}</a>
      </div>
    </div>
    <div class="column-title">
      {{name}}
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
    articles: Array,
    name: String
  }
}
</script>

<style scoped>
.column {
  width: 330px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  height: 500px;
  float: left;
  border-radius: 12px;
}

.column-block {
  padding-top: 10px;
  height: 490px;
  width: inherit;
  border-radius: 12px;
  position: relative;
  background-color: #fff;
}

.column-block:hover {
  box-shadow: 1px 1px 15px #ddd;
}

.column-title {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 330px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #EA6F5A;
  color: #fff;
  font-size: 20px;
}

.column-list {
  height: 450px;
  overflow: scroll;
}

.row {
  margin: 0 auto;
  margin-bottom: 10px;
  width: 310px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #f8f8f8;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
}

.row:hover {
  box-shadow: 1px 1px 3px #ccc;
}

.row a,
.row a:link,
.row a:visited {
  text-decoration: none;
  color: #333;
}

.row a:hover {
  text-decoration: none;
  color: #EA6F5A;
}
</style>
