<template>
  <div class="category">
    <page-search
      :searchConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    />
    <page-content
      ref="pageContentRef"
      pageName="category"
      :contentConfig="contentTableConfig"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { usePageSearch } from '@/hooks/usePageSearch'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'category',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleQueryClick,
      handleResetClick
    }
  }
})
</script>

<style scoped></style>
