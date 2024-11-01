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
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import AppMain from '@/components/AppMain.vue';
</script>
<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

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
  width: calc(100%- #{$sideBarWidth});
}
</style>