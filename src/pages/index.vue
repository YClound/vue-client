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
                this.$request({
                    url: '/api/login',
                    type: 'get',
                    data: {
                        name: '11111111'
                    }
                }).then(() => {

                }, (error) => {
                    console.log(error);
                });
            }
        },
        mounted() {
            this.getApi();

            var a = {
                b: 1,
                c: 2
            };

            // 浏览器属性
            Object.defineProperty(a, 'd', {
                enumerable: true,
                configurable: true,
                get: function() {
                    return this.b;
                },
                set: function(value) {
                    this.b = value;
                }
            });
            console.log(Object.getOwnPropertyDescriptor(a, 'd'));

            a.d = 3;

            console.log(a.d, a.b)
        }
    };
</script>

<style type="text/less" lang="less" scoped>

</style>
