<template>
    <div class="store-wrapper">
        vuex 的用法
    </div>
</template>

<script>
    // vuex
    import {mapGetters, mapState, mapMutations, mapActions} from 'vuex';

    export default {
        data() {
            return {};
        },
        computed: {
            ...mapState([
                'config',
                'login'
            ]),
            ...mapGetters([
                'isLogin'
            ])
        },
        methods: {
            ...mapMutations([
                'SET_CONFIG',
                'SET_LOGIN'
            ]),
            ...mapActions([
                'setConfig'
            ])
        },
        mounted() {
            this.SET_LOGIN();
            this.setConfig('123').then(() => {
                console.log(this.config);
            });
            // this.SET_CONFIG();
            console.log(this.$store, this.config, this.login.isLogin, this.isLogin);
        }
    };
</script>
