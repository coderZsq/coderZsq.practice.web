<template>
  <el-form :model="account" label-width="60px" ref="formRef" :rules="accountRules">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password" show-password />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, PropType, computed, ref } from 'vue'
import { Account } from '../types'
import { ElMessage } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from '@/store/index'

export default defineComponent({
  props: {
    modelValue: {
      type: Object as PropType<Account>,
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const store = useStore()

    const account = computed({
      get: () => props.modelValue,
      set: (newValue) => emit('update:modelValue', newValue)
    })

    const accountRules = {
      name: [
        { required: true, message: '必须输入用户名', trigger: 'blur' },
        { pattern: /^[a-z0-9]{6,20}$/, message: '必须是6~20个字母或者数字', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '必须输入密码', trigger: 'blur' },
        { pattern: /^[a-z0-9]{3,}$/, message: '必须是3位以上数字', trigger: 'blur' }
      ]
    }

    // 验证form的函数
    const formRef = ref<InstanceType<typeof ElForm>>()
    const accountLoginAction = (isKeep: boolean) => {
      // 1.验证是否成功
      formRef.value?.validate((valid) => {
        if (valid) {
          // 登录逻辑
          const name = account.value.name
          const password = account.value.password

          // 保存账号和密码
          if (isKeep) {
            localCache.setCache('name', name)
            localCache.setCache('password', password)
          }

          // 登录
          store.dispatch('login/accountLoginAction', { name, password })
        } else {
          ElMessage.error('账号或者密码错误~')
        }
      })
    }

    return {
      account,
      accountRules,
      formRef,
      accountLoginAction
    }
  }
})
</script>

<style scoped></style>
