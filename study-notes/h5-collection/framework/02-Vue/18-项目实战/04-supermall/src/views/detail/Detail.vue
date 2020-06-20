<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"
                    @titleClick="titleClick"
                    :index="currentIndex"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo" ref="param"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <detail-recommend-info :recommends="recommends" ref="recommend"/>
    </scroll>
    <back-top v-show="showBackTop" @click.native="backClick"/>
    <detail-bottom-bar @addCartClick="addCart"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailRecommendInfo from './childComps/DetailRecommendInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "network/detail";
  import {backTopMixin} from "common/mixin";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailRecommendInfo,
      DetailBottomBar,
      Scroll,
    },
    mixins: [backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTops: [],
        currentIndex: 0
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid

      // 2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        // 1.获取顶部的图片轮播数据
        // console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages

        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        // 6.获取评论数据
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })

      // 3.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()

        // 4.初始化主体的top
        this.themeTops.push(0)
        // this.$refs.param -> VueComponent
        this.themeTops.push(this.$refs.param.$el.offsetTop)
        this.themeTops.push(this.$refs.comment.$el.offsetTop)
        this.themeTops.push(this.$refs.recommend.$el.offsetTop)
        this.themeTops.push(Number.MAX_VALUE)
      },
      titleClick(index) {
        // 1.根据index取出对应的top
        const top = this.themeTops[index]

        // 2.滚到该位置
        this.$refs.scroll.scrollTo(0, -top, 200)
      },
      contentScroll(position) {
        // 1.获取滚动的y值
        const positionY = -position.y

        // 2.判断positionY当前处于哪两个数据之间
        // [0, 2878, 3723, 4013, 10000000000000000000]
        // positionY
        // 如果 positionY 处于 0和2878之间时, 将currentIndex 0
        // 如果 positionY 处于 2878和3723之间时, 将currentIndex 1
        // 如果 positionY 处于 3723和4013之间时, 将currentIndex 2
        // 如果 positionY 处于 大于4013之间时, 将currentIndex 3
        // if (positionY > this.themeTops[0] && positionY < this.themeTops[1]) {
        //   currentIndex = 0
        // } else if ()
        // 滚动到5000位置
        for (let i = 0; i < this.themeTops.length-1; i++) {
          // i = 3
          // 0 1 2 -> positionY > this.themeTops[i] && positionY < this.themeTops[i+1]
          // 3 -> positionY > this.themeTops[i]
          // if ((i < this.themeTops.length - 1 && positionY > this.themeTops[i] && positionY < this.themeTops[i+1]) || (i === this.themeTops.length - 1 && positionY > this.themeTops[i])) {
          //   currentIndex = i
          //   console.log(currentIndex);
          // }
          if (positionY >= this.themeTops[i] && positionY < this.themeTops[i+1] && this.currentIndex !== i) {
            this.currentIndex = i;
          }
        }

        // 3.根据滚动的位置, 来决定backTop是否显示
        this.listenShowBackTop(positionY)
      },
      addCart() {
        // 1.将商品添加到Vuex中保存起来
        // 1.1.获取当前需要放入到Vuex中的商品对象
        const obj = {}
        obj.iid = this.iid;
        obj.title = this.goods.title;
        obj.desc = this.goods.desc;
        obj.price = this.goods.realPrice;
        obj.image = this.topImages[0]

        // 1.2.将obj对象存放到store中的state中的cartList中
        // 任何修改state中的属性必须通过mutations
        this.$store.commit('addCart', obj)

        // 2.如果保存成功, 通过Toast显示一条提示信息
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px);
  }
</style>
