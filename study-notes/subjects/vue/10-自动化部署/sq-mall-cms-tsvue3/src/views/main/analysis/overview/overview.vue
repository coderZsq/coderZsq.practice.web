<template>
  <div class="overview">
    <hy-card title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </hy-card>
    <hy-card title="技术栈">
      <hy-text-link :text-arrs="technologyStacks" />
      <hy-descriptions title="生产环境依赖" :column="2" :table-datas="dependencies" />
      <hy-descriptions title="开发环境依赖" :column="2" :table-datas="devDependencies" />
    </hy-card>
    <hy-card title="项目结构">
      <div class="c-left">
        <hy-code language="bash" :code="projectDir" />
      </div>
    </hy-card>
    <hy-card title="项目规范">
      <hy-descriptions
        title="文件命名规范"
        :column="1"
        :table-datas="[
          { name: '文件夹', description: '统一小写, 多个单词使用-分割' },
          { name: '文件(.ts .vue .json .d.ts)', description: '统一小写, 多个单词使用-分割' }
        ]"
      />
      <hy-descriptions
        title="编写组件规范"
        :column="1"
        :table-datas="[
          { name: '组件的文件', description: '统一小写, 多个单词使用-分割' },
          {
            name: '组件的目录结构',
            description: '例如 button 组件：button/src/index.vue, 统一在button/index.ts导出'
          },
          {
            name: '组件导包顺序',
            description: '导vue技术栈的包 , 导第三方的工具函数 , 导本地的组件, 导本地的工具函数'
          },
          { name: '组件的名称', description: '统一大写开头，驼峰命名' },
          { name: '组件属性顺序', description: 'name, components, props, emits, setup ...' },
          { name: 'template标签', description: '小写加 - ( 例如：<case-panel/> )' },
          {
            name: 'template标签属性顺序',
            description: 'v-if , v-for , ref, class, style, ... ,事件'
          },
          { name: '组件的props', description: '小写开头，驼峰命名，必须编写类型默认值' },
          {
            name: '组件的样式',
            description: '作用域：scoped, lang = scss / less  ; 类名：统一小写, 多个单词使用-分割'
          }
        ]"
      />
    </hy-card>

    <hy-card title="Git提交规范">
      <hy-descriptions
        :column="1"
        :table-datas="[
          { name: 'add 操作', description: 'git add ' },
          { name: 'commit 操作', description: 'yarn commit ' },
          { name: 'pull 操作', description: 'git pull ' },
          { name: 'push 操作', description: 'git push ' }
        ]"
      />
    </hy-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HyDescriptions from '@/base-ui/descriptions'
import HyTextLink from '@/base-ui/text-link'
import HyCode from '@/base-ui/code'
import HyCard from '@/base-ui/card'

import { technologyStacks, dependencies, devDependencies, projectDir } from './config'
export default defineComponent({
  components: {
    HyDescriptions,
    HyCard,
    HyTextLink,
    HyCode
  },

  setup() {
    return {
      technologyStacks,
      dependencies,
      devDependencies,
      projectDir
    }
  }
})
</script>

<style scoped lang="less">
.overview {
  .c-left {
    text-align: left;
  }

  .el-card {
    margin-bottom: 20px;
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span {
      font-weight: 700;
    }
  }

  .description {
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-descriptions__title) {
      // ::v-deep .el-descriptions__title {
      font-weight: 400;
    }
  }
}
</style>
