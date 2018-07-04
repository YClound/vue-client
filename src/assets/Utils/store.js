function factory(store) {
    var _local = store || {
            getItem: function(key) {
                return this[key];
            },
            setItem: function(key, value) {
                this[key] = value;
            },
            removeItem: function(key) {
                delete this[key];
            }
        },
        _get = function(k) {
            var d = _getData(k);
            if (d != null) return d.value;
            return null;
        }, _getData = function(k) {
            if (k in _local) {
                return JSON.parse(_local.getItem(k));
            } else if (k in _local) return JSON.parse(_local.getItem(k));
            else return null;
        }, _set = function(k, v) {
            var d = {
                value: v,
                ts: (new Date).getTime()
            };
            d = JSON.stringify(d);
            _local.setItem(k, d);
        }, _clear = function() {
            _local.clear();
        }, _remove = function(k) {
            _local.removeItem(k);
        }, _removeExpires = function(time) {
            var now = (new Date).getTime(),
                data;
            for (var key in _local) {
                data = _getData(key);
                if (now - data.ts > time) {
                    _local.removeItem(key);
                }
            }
        }, _setData = function(k, data) {
            var d;
            if (typeof data === 'object') {
                data.ts = (new Date).getTime();
                d = JSON.stringify(data);
                _local.setItem(k, d);
            }
        };
    return {
        set: _set,
        get: _get,
        setData: _setData,
        getData: _getData,
        clear: _clear,
        remove: _remove,
        removeExpires: _removeExpires
    };
}

let localStore = factory(window.localStorage);
let sessionStore = factory(window.sessionStorage);

export {
    localStore,
    sessionStore
};

export function setStore(key, data) {
    sessionStore.setData(key, data);
}

export function getStore(key) {
    return sessionStore.getData(key);
}

export function removeStore(key) {
    sessionStore.remove(key);
}

export function clearStore() {
    sessionStore.clear();
}
