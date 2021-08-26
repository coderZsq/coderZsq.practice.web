<template>
  <el-form :model="account" label-width="60px">
    <el-form-item label="账号">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="account.password" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Account } from '../types'

export default defineComponent({
  props: {
    account: {
      type: Object as PropType<Account>,
      default: () => ({ name: '', password: '' })
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
