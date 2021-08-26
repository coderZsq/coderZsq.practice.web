<template>
  <div class="nav-header">
    <i
      class="menu-icon"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>

    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs" />
      <nav-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'

import { pathMapBreadcrumbs } from '@/utils/map-menu'

import NavInfo from './nav-info.vue'
import HyBreadcrumb from '@/base-ui/breadcrumb'

import useMenuIcon from '../hooks/useMenuIconHook'

export default defineComponent({
  components: {
    NavInfo,
    HyBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, ctx) {
    // 1.菜单icon
    const [isFold, handleFoldClick] = useMenuIcon({ emit: ctx.emit })

    // 2.获取菜单列表
    const breadcrumbs = computed(() => {
      const path = useRoute().path
      const userMenus = useStore().state.login.userMenus
      return pathMapBreadcrumbs(userMenus, path)
    })

    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  flex: 1;

  .menu-icon {
    font-size: 28px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
