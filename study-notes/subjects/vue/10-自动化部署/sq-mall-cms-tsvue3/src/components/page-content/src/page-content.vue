<template>
  <div class="page-content">
    <hy-table
      :totalCount="totalCount"
      :listData="pageListData"
      v-bind="contentConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button v-if="isCreate" type="primary" size="medium" @click="handleNewData">
          {{ contentConfig.newBtnTitle ?? '新建数据' }}
        </el-button>
      </template>

      <template #status="scope">
        <el-button :type="scope.row.enable ? 'success' : 'danger'" size="mini" plain>
          {{ $filters.showStatus(scope.row.enable) }}
        </el-button>
      </template>
      <template #create="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #update="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>
      <template #handler="scope">
        <div class="handler">
          <el-button
            v-if="isUpdate"
            type="text"
            icon="el-icon-edit"
            size="mini"
            @click="handleEditClick(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            v-if="isDelete"
            type="text"
            icon="el-icon-delete"
            size="mini"
            @click="handleDeleteClick(scope.row)"
          >
            删除
          </el-button>
        </div>
      </template>
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
      <!-- <template #imageSlot="scope">
        <slot name="imageSlot" :row="scope.row"></slot>
      </template> -->
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue'
import { useStore } from '@/store'
import { usePermission } from '@/hooks/usePermission'

import HyTable from '@/base-ui/table'

export default defineComponent({
  components: {
    HyTable
  },
  props: {
    contentConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    // 7.按钮是否显示
    const isCreate = usePermission(props.pageName, 'create')
    const isDelete = usePermission(props.pageName, 'delete')
    const isUpdate = usePermission(props.pageName, 'update')
    const isQuery = usePermission(props.pageName, 'query')

    // 1.请求页面数据
    const store = useStore()

    // 0.绑定pageInfo
    const pageInfo = ref({
      currentPage: 1,
      pageSize: 10
    })
    watch(pageInfo, () => getPageData())

    let otherQueryInfo = {}

    // 2.获取数据
    const getPageData = (otherInfo: any = {}) => {
      if (!isQuery) return
      otherQueryInfo = otherInfo
      store.dispatch('system/getPageListDataAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...otherInfo
        }
      })
    }
    getPageData()

    // 2.获取页面数据
    const pageListData = computed(() => store.getters['system/pageListData'](props.pageName))

    // 3.footer
    const totalCount = computed(() => store.getters['system/pageListDataCount'](props.pageName))

    // 4.剩余需要的插槽
    const otherPropSlots = computed(() => {
      return props.contentConfig.propList.filter((item: any) => {
        if (item.slotName === 'status') return false
        else if (item.slotName === 'create') return false
        else if (item.slotName === 'update') return false
        else if (item.slotName === 'handler') return false
        return true
      })
    })

    // 5.删除操作
    const handleDeleteClick = (rowItem: any) => {
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...otherQueryInfo
        },
        id: rowItem.id
      })
    }

    // 6.新建数据
    const handleNewData = () => {
      emit('newBtnClick')
    }
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }

    return {
      pageInfo,
      pageListData,
      totalCount,
      getPageData,
      otherPropSlots,
      handleDeleteClick,
      handleEditClick,
      handleNewData,
      isCreate,
      isUpdate,
      isDelete
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
