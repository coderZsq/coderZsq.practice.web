<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-show="!collapse" class="title">Coderwhy-CMS</span>
    </div>
    <el-menu
      :default-active="currentItemId"
      class="el-menu-vertical"
      background-color="#0c2135"
      :collapse="collapse"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in menus" :key="item.id">
        <!-- 判断二级菜单 -->
        <template v-if="item.children && item.children.length">
          <el-submenu :index="item.id + ''">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''" @click="handleItemClick(subitem)">
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.id + ''" @click="handleItemClick(item)">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menu'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  setup() {
    // 1.获取menus
    const store = useStore()
    const menus = store.state.login.userMenus

    // 2.记录选中的index
    const router = useRouter()
    const route = useRoute()
    const menu = pathMapToMenu(menus, route.path)
    const currentItemId = ref<string>(menu.id + '')
    const handleItemClick = (item: any) => {
      currentItemId.value = item.id + ''
      router.push({
        path: item.url ?? '/not-found'
      })
    }

    return {
      menus,
      currentItemId,
      handleItemClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
