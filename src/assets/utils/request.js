import Axios from 'axios';

const service = Axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 5000
});

// 返回数据拦截
service.interceptors.response.use((response) => {
    let data = response.data || {};
    let code = data.code;
    if (code === 0) {
        return data;
    } else {
        return Promise.reject(data);
    }
}, () => {
    let error = {code: -1, msg: '网络走神....'};
    return Promise.reject(error);
});

let request = function(options) {
    const url = options.url || '';
    const type = options.type || 'POST';
    const data = options.data || {};
    let config = {
        method: type,
        url: url
    };
    if (type === 'get' || type === 'GET') {
        config.params = data;
    } else {
        config.data = data;
    }

    return service.request(config).then((repsone) => {
        return repsone;
    }, (error) => {
        return Promise.reject(error);
    });
};

export default request;
