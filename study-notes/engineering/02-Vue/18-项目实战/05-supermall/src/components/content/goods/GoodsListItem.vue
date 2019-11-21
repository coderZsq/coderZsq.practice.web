<template>
  <div class="goods-item" @click="itemClick">
    <!--首页: goodsItem.show.img-->
    <!--详情: goodsItem.image-->
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        // 1.if/else判断
        // if (this.goodsItem.image) {
        //   return this.goodsItem.image
        // } else {
        //   this.goodsItem.show.img
        // }

        // 2.三元运算符
        // return this.goodsItem.image ? this.goodsItem.image : this.goodsItem.show.img

        // 3.利用短路或事项
        // || : 短路或 -> 特点: 前面的代码为true, 后面的代码不执行
        return this.goodsItem.image || this.goodsItem.show.img

        // 短路与 &&
        // const n = 20;
        // const m = 30
        // // n > 25: false
        // if (n > 25 && m > 25) {
        //   console.log('都大于25');
        // }
        //
        // // 后面的代码
        // console.log('1111');
        //
        // // 短路与 ||
        // if (30 > 25 || n > 25) {
        //   console.log('有一个大于25');
        // }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
