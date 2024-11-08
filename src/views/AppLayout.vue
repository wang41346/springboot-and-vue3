<template>
  <div class="app-wrapper">
    <!-- 左侧menu -->
    <sidebar
    id="guide-siderbar"
    class="sidebar-container"
    :style="{ backgroundColor:variables.menuBg }"
    ></sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的navbar -->
         <navbar></navbar>
      </div>
      <!-- 内容区 -->
       <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/AppNavbar.vue';
import Sidebar from '@/components/AppSidebar.vue';
import AppMain from '@/components/AppMain.vue';
import variables from '@/styles/variables.module.scss'; // 导入 SCSS 变量
</script>
<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper{
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header{
  position: fixed;
  top:0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>