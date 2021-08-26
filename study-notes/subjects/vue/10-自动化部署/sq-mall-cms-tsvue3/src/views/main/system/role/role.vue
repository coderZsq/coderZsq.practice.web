<template>
  <div class="role">
    <page-search
      :searchConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    />
    <page-content
      ref="pageContentRef"
      pageName="role"
      :contentConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="modalInfo"
      pageName="role"
      :otherInfo="otherInfo"
    >
      <el-tree
        class="menu-tree"
        :check-strictly="false"
        ref="elTreeRef"
        :data="roleMenus"
        show-checkbox
        node-key="id"
        @check="handleMenuCheckChange"
        :props="{ label: 'name', children: 'children' }"
      >
      </el-tree>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { useStore } from '@/store'

import { getMenuChecks } from '@/utils/map-menu'

import { ElTree } from 'element-plus'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    // pageSearch处理hook
    const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch()

    // ElTree的处理逻辑
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    // 点击edit的回显回调
    const editCallback = (item: any) => {
      nextTick(() => {
        const checks = getMenuChecks(item.menuList)
        elTreeRef.value?.setCheckedKeys(checks, true)
      })
    }
    // pageModal的hook
    const [modalInfo, pageModalRef, handleNewData, handleEditData] = usePageModal(
      undefined,
      editCallback
    )
    // pageModal的额外参数menuList
    const otherInfo = ref({})
    const handleMenuCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      console.log(menuList)
      otherInfo.value = { menuList }
    }

    // 角色选择菜单数据
    const store = useStore()
    const roleMenus = computed(() => store.state.entireMenus)

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleQueryClick,
      handleResetClick,
      modalConfig,
      modalInfo,
      pageModalRef,
      handleNewData,
      handleEditData,
      roleMenus,
      elTreeRef,
      handleMenuCheckChange,
      otherInfo
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
