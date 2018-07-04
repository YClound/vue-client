import {setStore, getStore} from '@/assets/Utils/store.js';

export default {
    state: {
        isLogin: false
    },
    mutations: {
        INIT_LOGIN(state) {
            state.isLogin = getStore('isLogin');
        },
        SET_LOGIN(state) {
            setStore('isLogin', true);
            state.isLogin = true;
        }
    }
};
