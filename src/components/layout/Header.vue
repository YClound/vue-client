<template>
  <a-layout-header style="background: #fff;" class="main-content-header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="handleMenuClick"
    />
    <a-menu mode="horizontal" :default-selected-keys="['2']" :style="{ lineHeight: '64px' }">
      <a-menu-item key="1">
        <router-link to="/user/home">我的</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/user/setting">设置</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  props: {
    onMenuIconClick: Function
  },
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    handleMenuClick() {
      this.collapsed = !this.collapsed;
      this.onMenuIconClick && this.onMenuIconClick(this.collapsed);
    }
  }
};
</script>

<style lang="less" scoped>
.main-content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding-right: 24px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #1890ff;
  }
}
</style>