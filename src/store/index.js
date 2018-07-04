import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import login from './modules/login.js';

Vue.use(Vuex);

const state = {
    config: {}
};

export default new Vuex.Store({
    modules: {
        login
    },
    state,
    getters,
    mutations,
    actions
});
