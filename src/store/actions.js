export default {
    // 异步回调
    setConfig({commit}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('SET_CONFIG');
                resolve();
            }, 1000);
        });
    }
};
