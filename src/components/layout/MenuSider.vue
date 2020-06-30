<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1">
        <a-icon type="home" />
        <router-link to="/">Home</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="appstore" />
        <router-link to="/base">Base</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="user" />
        <router-link to="/about">About</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  props: {
    collapsed: Boolean
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-menu-item > a {
  display: inline-block;
  color: #ffffff;
}
.ant-menu-inline-collapsed {
  .ant-menu-item > a {
    display: none;
  }
}
</style>