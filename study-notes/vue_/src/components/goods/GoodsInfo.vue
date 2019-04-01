<template>
    <div class="goodsinfo-container">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价: <del>¥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价: <span class="now_price">¥{{goodsinfo.sell_price}}</span>
                    </p>
                    <p>购买数量: <numbox>1</numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即买入</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header"></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号: {{goodsinfo.goods_no}}</p>
                    <p>库存情况: {{goodsinfo.stock_quantity}}件</p>
                    <p>上架时间: {{goodsinfo.add_time | dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import swiper from '../subcomponents/swiper.vue';
    import numbox from "../subcomponents/goodsinfo_numbox.vue";


    export default {
        name: "GoodsInfo",
        data() {
            return {
                id: this.$route.params.id,
                lunbotu: [],
                goodsinfo: {}
            }
        },
        created() {
            this.getLunbotu();
            this.getGoodsInfo();
        },
        methods: {
            getLunbotu() {
                this.$http.get('api/getthumimages/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        result.body.message.forEach(item => {
                            item.img = item.src;
                        });
                        this.lunbotu = result.body.message;
                    }
                });
            },
            getGoodsInfo() {
                this.$http.get('api/goods/getinfo/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        this.goodsinfo = result.body.message[0];
                    }
                });
            },
            goDesc(id) {
                this.$router.push({
                    name: 'goodsdesc',
                    params: {
                        id
                    }
                });
            },
            goComment(id) {
                this.$router.push({
                    name: 'goodscomment',
                    params: {
                        id
                    }
                });
            }
        },
        components: {
            swiper,
            numbox
        }
    }
</script>

<style lang="scss" scoped>
    .goodsinfo-container {
        background-color: #eee;
        overflow: hidden;
        .now_price {
            color: red;
            font-size: 16px;
            font-weight: bold;
        }
    }
    .mui-card-footer {
        display: block;
        button {
            margin: 10px 0;
        }
    }
</style>