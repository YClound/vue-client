<template>
    <div class="login-wrapper">
        <div class="login-form">
            <Form :model="formItem" :label-width="80">
                <FormItem label="账号">
                    <Input v-model="formItem.name" placeholder="请输入账号"/>
                </FormItem>
                <FormItem label="密码">
                    <Input v-model="formItem.password" placeholder="请输入密码"/>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="commitForm">提交</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex';

    export default {
        data() {
            return {
                formItem: {
                    name: '',
                    password: ''
                }
            };
        },
        methods: {
            ...mapMutations([
                'SET_LOGIN'
            ]),
            commitForm() {
                Utils.setStore('isLogin', {p: true});
                Utils.jumpTo('/');
            }
        },
        mounted() {
        }
    };
</script>

<style type="text/less" lang="less">
    .login-wrapper {
        .login-form {
            width: 320px;
            padding-top: 50px;
        }
    }
</style>
