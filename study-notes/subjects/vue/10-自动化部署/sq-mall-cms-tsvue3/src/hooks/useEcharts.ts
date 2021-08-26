import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

export function useEcharts(domEl: HTMLElement, theme = 'light') {
  // 初始化echarts
  const echartsInstance = echarts.init(domEl, theme, { renderer: 'svg' })

  // 设置options
  const setOptions = (options: EChartsOption) => {
    echartsInstance.setOption(options)
  }

  return [setOptions]
}
