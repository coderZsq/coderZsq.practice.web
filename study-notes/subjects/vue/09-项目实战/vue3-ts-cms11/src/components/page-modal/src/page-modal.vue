<template>
  <div>
    <div class="page-model">
      <el-dialog title="新建用户" v-model="dialogVisible" width="30%" center>
        <sq-form v-bind="modalConfig" v-model="formData"></sq-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false"
              >确 定</el-button
            >
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import SqForm from '@/base-ui/form'

export default defineComponent({
  components: {
    SqForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const dialogVisible = ref(false)
    const formData = ref({})

    return {
      dialogVisible,
      formData
    }
  }
})
</script>

<style scoped></style>
