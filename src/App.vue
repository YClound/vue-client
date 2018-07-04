<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style lang="less" type="text/less">
    #app {
        color: #2c3e50;
        height: 100%;

        .main-wrapper {
            min-height: 100%;
            position: relative;
            padding-top: 65px;
            padding-bottom: 40px;
        }

        .container-wrapper {
            position: relative;
            padding-left: 250px;
            min-height: 600px;
            .sidebar-wrapper {
                position: absolute;
                height: 100%;
                left: 0;
                top: 0;
                width: 250px;
                border-right: #dddddd 1px solid;
            }
        }
    }
</style>
