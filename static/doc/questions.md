## 兼容性问题
* 移动端(小米1)软键盘收回时整体页面会下移，顶部会留白解决方法：加#app{margin-top:1px}，移动端高度未达到100%时，增加高度1px防止软键盘收起，整个页面下移，上滑恢复原先的页面
* 移动端(小米1)学信网和人行征信没有设置font-size的容器字体偏小，没有继承body设置的默认字体；解决方案：在最外层div上设置字体大小
* IOS11 绑定fastClick input获取焦点困难
* 移动端返回不支持刷新，监听pageShow、pagehide事件刷新页面，安卓版本钉钉不支持history、replace，replaceState/pushState不允许跨域

## 知识点问题
* 登录表单沈阳、长沙等渠道切换登录方式，身份证号会和先前渠道身份证号相同，原因for循环渲染的key值在数组变化之前会调用组件，导致key的值和数组变化之后相同，vue未监听到key值的变化没有重新加载value的值。切换登录方式之后会调用两次组件原因是：textfiled绑定的数据有两次变化：loginType改变和field数组
注：for循环使用组件需要给组件设置一个唯一的key值。
* 前端静态资源html页面在试用环境和生产环境会加载两次。跨域请求nginx设置请求两次第一次是option请求访问是否支持跨域请求，第二次是真实的请求，请求静态资源html页面内容。
* http://g.alicdn.com/sd/pointman/js/pt.js 阿里云-反欺诈风险识别
* webpack2 打包使用webpack.LoaderOptionsPlugin({minimize : true}).vue文件中css样式丢失；重新配置vue-loader对css、less的打包
* forEach return 无法跳出循环、可以使用抛出异常解决
* height: auto 使用transition动画无法实现，可以使用max-height和js实现
* 合并对象Object.assign

## 遇到的问题

* iframe跳转
* webpack打包
* vue render函数
* **promise** 用法
