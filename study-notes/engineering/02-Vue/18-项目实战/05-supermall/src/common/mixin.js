import BackTop from 'components/content/backTop/BackTop'

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      showBackTop: false
    }
  },
  // 生命周期函数的代码片段是可以单独抽取的.
  mounted() {
    // console.log('哈哈哈哈')
    // console.log('------mounted');
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    // 注意: methods中某一个具体的函数中的代码片段是不可以抽取的
    listenShowBackTop(positionY) {
      this.showBackTop = positionY > 1000
    }
  }
}
