<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户列表</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <!-- <div v-for="item in $store.state.userlist" :key="item" class="text item">{{ item.username }}</div> -->
      <!-- <div v-for="item in agelist" :key="item" class="text item">{{ item.username }}</div> -->
      <div v-for="item in userlist" :key="item" class="text item">{{ item.username }}</div>
    </el-card>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "UserList",
  methods: {
    // 设置映射
    // 就是使用this.myGetlistuser代替了this.$store.dispatch("aGet_LIST")
    ...mapActions({
      myGetlistuser: "aGet_LIST"
    })
  },
  computed: {
    // 放置函数一般放置的是计算函数
    // agelist() {
    //   return this.$store.getters.agelist;
    // }
    ...mapGetters(["agelist"]),
    ...mapState(["userlist"])
  },
  created() {
    // 我们需要调用对应的actions中的方法
    // this.$store.dispatch("aGet_LIST");
    this.myGetlistuser();
  }
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
.el-main {
  padding: 0;
}
.el-card {
  width: 100%;
}
</style>
