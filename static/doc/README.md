<p align="center">
    <a href="http://www.shulidata.com">
        <img width="200" src="http://www.shulidata.com/image/logo.png">
    </a>
</p>

## 安装nodejs

#### linux
1、去官网下载和自己系统匹配的文件：

英文网址：https://nodejs.org/en/download/

中文网址：http://nodejs.cn/download/

通过  uname -a  命令查看到我的Linux系统位数是64位（备注：x86_64表示64位系统， i686 i386表示32位系统），如图

2、下载下来的tar文件上传到服务器并且解压，然后通过建立软连接变为全局；

1）上传服务器可以是自己任意路径，目前我的放置路径为  cd /app/software/

2）解压上传（解压后的文件我这边将名字改为了nodejs，这个地方自己随意，只要在建立软连接的时候写正确就可以）

    tar -xvf   node-v6.10.0-linux-x64.tar.xz

    mv node-v6.10.0-linux-x64  nodejs

    确认一下nodejs下bin目录是否有node 和npm文件，如果有执行软连接，如果没有重新下载执行上边步骤；

3）建立软连接，变为全局

    ln -s /app/software/nodejs/bin/npm /usr/local/bin/
    ln -s /app/software/nodejs/bin/node /usr/local/bin/


4）最后一步检验nodejs是否已变为全局

    在Linux命令行node -v 命令会显示nodejs版本


#### window
> 官网下载地址： [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

## 安装git
代码管理

> 官网下载地址: https://nodejs.org/en/download/

## 终端shell
linux可以直接使用cmd

window需要下载shell

    随着git安装 git-bash： https://git-for-windows.github.io/

    windows下的全能shell： http://mobaxterm.mobatek.net/

    win10 下可以直接使用ubuntu bash-shell 方法：http://jingyan.baidu.com/article/e73e26c0be8b6624adb6a7ba.html


## 环境变量
window下可能会出现`不是内部或外部命名`

    win下环境变量详解： http://www.cnblogs.com/sunada2005/articles/2725277.html
    win下设置环境变量Path：http://jingyan.baidu.com/article/b24f6c82cba6dc86bfe5da9f.html


## npm
npm是什么？npm是 nodejs的依赖下载和管理工具，比如vuejs，你可以直接通过npm install vue 命令直接安装，就不用手动下载js文件了。

`npm install vue-cli -g`， 如果使用npm在安装某个包的时候带上-g参数，意味着该包是全局安装 global。
如此安装完成，你就可以在命令行里使用vue-cli这样的全局包。

本文原创发布于慕课网 ，转载请注明出处，谢谢合作


npm最容易产生的就是网络问题,我们可以在每次npm下载的时候指定registry，比如
```bash
npm install --registry=https://registry.npm.taobao.org
```

如果你觉得，每次安装都要带registry参数很麻烦，你可以用alias（别名）命令
```bash
alias cnpm="npm --registry=https://registry.npm.taobao.org \ --cache=$HOME/.npm/.cache/cnpm \ --disturl=https://npm.taobao.org/dist \ --userconfig=$HOME/.cnpmrc"
```
这个命令的意思是，设置cnpm这样一个别名，每次跑cnpm都会执行后面那一套，而后面就是指定了仓库和缓存等一系列参数的淘宝地址。
设置完cnpm以后，接下来你就可以直接使用cnpm来替代npm，进行依赖的安装和管理。
