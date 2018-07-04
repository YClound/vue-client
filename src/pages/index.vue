<template>
    <div class="index-wrapper">
        <router-link to="/introduce">说明</router-link>
        <router-link to="/components">组件</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {};
        },
        methods: {
            getApi() {
                console.log(this);
                this.$request({
                    url: '/api/login',
                    type: 'get',
                    data: {
                        name: '11111111'
                    }
                }).then(() => {

                }, (error) => {
                    console.log(error, '22222222222');
                });
            }
        },
        mounted() {
            this.getApi();
        }
    };
</script>

<style type="text/less" lang="less" scoped>

</style>
