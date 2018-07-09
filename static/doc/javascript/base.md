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
