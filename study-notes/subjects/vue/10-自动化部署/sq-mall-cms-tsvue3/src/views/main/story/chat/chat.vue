<template>
  <div class="chat">
    <hy-editor v-model:value="htmlString" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyEditor from '@/base-ui/editor'

export default defineComponent({
  name: 'chat',
  components: {
    HyEditor
  },
  setup() {
    const htmlString = ref<string>('coderwhy')
    return {
      htmlString
    }
  }
})
</script>

<style scoped></style>
