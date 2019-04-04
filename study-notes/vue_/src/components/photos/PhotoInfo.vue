<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间: {{photoinfo.add_time | dateFormat}}</span>
            <span>点击: {{photoinfo.click}}次</span>
        </p>
        <hr>
        <div class="thumbs">
            <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
        </div>
        <div class="content" v-html="photoinfo.content"></div>
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue';


    export default {
        name: "PhotoInfo",
        data() {
            return {
                id: this.$route.params.id,
                photoinfo: {},
                list: []
            }
        },
        created() {
            this.getPhotoInfo();
            this.getThumbs();
        },
        methods: {
            getPhotoInfo() {
                this.$http.get('api/getimageInfo/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        this.photoinfo = result.body.message[0];
                    }
                });
            },
            getThumbs() {
                this.$http.get('api/getthumimages/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        result.body.message.forEach(item => {
                            item.w = 600;
                            item.h = 400;
                        });
                        this.list = result.body.message;
                    }
                });
            }
        },
        components: {
            'cmt-box': comment
        }
    }
</script>

<style scoped>
    .photoinfo-container {
        padding: 3px;
        h3 {
            color: #26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .content {
            font-size: 13px;
            line-height: 30px;
        }
    }
    .thumbs {
        img {
            margin: 10px;
            box-shadow: 0 0 8px #999;
        }
    }
</style>