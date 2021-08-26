// import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
declare const $store: any
declare const $filters: any
declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    name: string
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
    $filters: any
  }
}
