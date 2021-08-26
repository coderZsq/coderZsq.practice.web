<template>
  <div id="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    return {
      zhCn
    }
  }
})
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
