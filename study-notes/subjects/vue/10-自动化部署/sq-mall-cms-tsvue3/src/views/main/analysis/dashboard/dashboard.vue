<template>
  <div class="dashboard">
    <!-- 1.顶部数据统计 -->
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panelData="item" />
        </el-col>
      </template>
    </el-row>

    <!-- 2.中间图标 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <hy-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </hy-card>
      </el-col>
      <el-col :span="7">
        <hy-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </hy-card>
      </el-col>
    </el-row>

    <!-- 3.底部图标 -->
    <el-row :gutter="10" class="row">
      <el-col :span="12">
        <hy-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </hy-card>
      </el-col>
      <el-col :span="12">
        <hy-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsSale"></bar-echart>
        </hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import StatisticalPanel from '@/components/statistical-panel'
import HyCard from '@/base-ui/card'
import { PieEchart, MapEchart, RoseEchart, LineEchart, BarEchart } from '@/components/page-charts'

export default defineComponent({
  name: 'dashboard',
  components: {
    HyCard,
    StatisticalPanel,
    PieEchart,
    MapEchart,
    RoseEchart,
    LineEchart,
    BarEchart
  },
  setup() {
    // 1.发起数据统计的网络请求
    const store = useStore()
    store.dispatch('analysis/getAnalysisDataAction')

    // 2.获取顶部PanelData
    const topPanelData = computed(() => store.state.analysis.topPanelDatas)
    const categoryGoodsCount = computed(() => {
      return store.state.analysis.categoryGoodsCount.map((item: any) => {
        return { value: item.goodsCount, name: item.name }
      })
    })
    const goodsSaleTop10 = computed(() => {
      return store.state.analysis.goodsSaleTop10.map((item: any) => {
        return { value: item.saleCount, name: item.name }
      })
    })
    const categoryGoodsSale = computed(() => {
      const goodsSale = store.state.analysis.categoryGoodsSale
      const labels: string[] = []
      const values: any[] = []
      for (const item of goodsSale) {
        labels.push(item.name)
        values.push(item.goodsCount)
      }
      return { labels, values }
    })
    const addressGoodsSale = computed(() => {
      return store.state.analysis.goodsAddressSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      topPanelData,
      categoryGoodsCount,
      goodsSaleTop10,
      categoryGoodsSale,
      addressGoodsSale
    }
  }
})
</script>

<style scoped lang="less">
.dashboard {
  background-color: #f5f5f5;

  .row {
    margin-top: 20px;
  }
}
</style>
