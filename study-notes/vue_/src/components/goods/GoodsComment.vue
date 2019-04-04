<template>
    <div>
        <cmtbox :id="$route.params.id"></cmtbox>
    </div>
</template>

<script>
    import cmtbox from '../subcomponents/comment.vue';


    export default {
        name: "GoodsComment",
        components: {
            cmtbox
        }
    }
</script>

<style scoped>

</style>