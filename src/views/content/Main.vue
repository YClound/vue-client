<template>
  <a-layout id="app" class="main-content">
    <MenuSider :collapsed="collapsed" />
    <a-layout>
      <Header :onMenuIconClick="handleMenuClick" />
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px', flex: 1, overflowY: 'auto' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import MenuSider from "@/components/layout/MenuSider";
import Header from "@/components/layout/Header";
export default {
  data() {
    return {
      collapsed: false
    };
  },
  components: { MenuSider, Header },
  methods: {
    handleMenuClick(collapsed) {
      this.collapsed = collapsed;
    }
  }
};
</script>

<style lang="less" scoped>
.main-content {
  height: 100%;
}
</style>
