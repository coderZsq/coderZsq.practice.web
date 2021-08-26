<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  components: {
    LoginPanel
  }
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
