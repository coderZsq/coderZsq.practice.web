<template>
  <div>
    <hy-form v-bind="searchConfig" v-model="formData">
      <template #footer>
        <div class="btns">
          <el-button size="medium" icon="el-icon-refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" size="medium" icon="el-icon-search" @click="handleQueryClick"
            >查询</el-button
          >
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import HyForm, { IForm } from '@/base-ui/form'

interface IFormData {
  [key: string]: any
}

export default defineComponent({
  components: {
    HyForm
  },
  props: {
    searchConfig: {
      type: Object as PropType<IForm>,
      required: true
    },
    title: {
      type: String,
      default: '高级检索'
    }
  },
  emits: ['queryBtnClick', 'resetBtnClick'],
  setup(props, { emit }) {
    const originFormData: IFormData = {}
    const formItems = props.searchConfig.formItems ?? []
    for (const formItem of formItems) {
      originFormData[`${formItem.field}`] = ''
    }

    const formData = ref<IFormData>({ ...originFormData })

    const handleResetClick = () => {
      for (const key in originFormData) {
        formData.value[`${key}`] = originFormData[key]
      }
      emit('resetBtnClick')
    }

    const handleQueryClick = () => {
      console.log({ ...formData.value })
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.title {
  padding-left: 30px;
  text-align: left;
}

.btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
