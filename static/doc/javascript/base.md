## 浏览器属性和数据属性

````javascript
var a = {
        b: 1,
        c: 2
    };

// 定义对象的属性
Object.defineProperty(a, 'd', {
    enumerable: true, // 默认false
    configurable: true, // 默认false
    get: function() {
        return this.b;
    },
    set: function(value) {
        this.b = value;
    }
});

/* 浏览器属性: 访问器属性不能直接定义，要通过Object.defineProperty()这个方法来定义
 * configurable：表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或能否把属性修改为访问器属性，默认为false
 * enumerable:表示能否通过for-in循环返回属性,默认为false
 * Get：在读取属性时调用的函数,默认值为undefined
 * Set：在写入属性时调用的函数,默认值为undefined
*/
console.log(Object.getOwnPropertyDescriptor(a, 'd'));
=> {get: ƒ, set: ƒ, enumerable: true, configurable: true}

/* 数据属性: 修改属性属性的默认特性使用Object.defineProperty()方法
 * configurable：表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或能否把属性修改为访问器属性，默认为true
 * enumerable:表示能否通过for-in循环返回属性
 * writable：表示能否修改属性的值
 * value：包含该属性的数据值。默认为undefined
*/
console.log(Object.getOwnPropertyDescriptor(a, 'b'));
=> {value: 1, writable: true, enumerable: true, configurable: true}

// 返回对象的所有自身属性的属性名（包括不可枚举的属性）组成的数组，但不会获取原型链上的属性, Object.keys()
console.log(Object.getOwnPropertyNames(a));
=> (3) ["b", "c", "d"]

a.d = 3;
console.log(a.d, a.b)
=> 3,3
````

## iframe框架
* 作用：因为同域，父页面可以对子页面进行改写,反之亦然。跨域，父页面没有权限改动子页面,但可以实现页面的跳转

````javascript
// 获取iframe里的内容
const iframe = document.getElementById('iframe');
const iwindow = iframe.contentWindow || window.frames['iframe'];
const idoc = iwindow.document;

console.log('window', iwindow);// 获取iframe的window对象
console.log('document', idoc);  // 获取iframe的document
console.log('html', idoc.documentElement);// 获取iframe的html
console.log('head', idoc.head);  // 获取head
console.log('body', idoc.body);  // 获取body
/*
 * 在iframe中获取父级内容
 * window.parent 获取上一级的window对象，如果还是iframe则是该iframe的window对象
 * window.top 获取最顶级容器的window对象，即，就是你打开页面的文档
 * window.self 返回自身window的引用。可以理解 window===window.self(脑残)
 */
````

## promise对象

````javascript

// 异步操作1
 function runAsync() {
    var p = new Promise(function(resolve, reject) {
        //做一些异步操作
        setTimeout(function() {
            console.log('异步操作执行完成');
            resolve('执行成功数据111111');
        }, 2000);
    });
    return p;
}

// 异步操作2
function runAsync2() {
    var p = new Promise(function(resolve, reject) {
        //做一些异步操作
        setTimeout(function() {
            console.log('异步任务2执行完成');
            resolve('执行成功数据222');
        }, 2000);
    });
    return p;
}

runAsync().then(function(data) {
    console.log(data);
    return runAsync2();
}).then(function(data) {
    console.log(data);
    return '执行成功数据3333';
}).then(function(data) {
    console.log(data);
});
````
