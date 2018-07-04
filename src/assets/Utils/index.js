import {setStore, getStore} from './store.js';

export default {
    setStore,
    getStore,
    jumpTo(option) {
        window.__router.push(option);
        console.log(__router);
    },
    redirectTo(option) {
        window.__router.replace(option);
    },
    // 获取location query
    getQueryString(name) {
        var reg = new RegExp('(^|&|\\?)' + name + '=([^&]*)(&|$)');
        let path = location.href.match(reg);
        if (path) {
            return unescape(path[2]);
        } else {
            return null;
        }
    },
    /*
    * @连字符转驼峰
    * eg: authorized-collect => authorizedCollect
    * */
    toCamelCase: function(str) {
        if (!_.isString(str)) return str;

        return str.replace(/-[A-Za-z]/g, (match) => {
            return match.replace('-', '').toUpperCase();
        });
    }
};
