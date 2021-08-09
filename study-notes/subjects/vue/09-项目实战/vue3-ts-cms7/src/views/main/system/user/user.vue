<template>
  <div class="user">
    <sq-form v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SqForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  components: {
    SqForm
  },
  name: 'user',
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
