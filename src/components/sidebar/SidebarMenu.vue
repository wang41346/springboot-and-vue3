<template>
  <!-- 一级menu菜单 -->
   <el-menu
   :unique-opened="true"
   default-active="2"
   background-color="#545c46"
   text-color="#fff"
   active-text-color="#ffd04b"
   >
   <!-- 子集menu菜单 -->
    <el-sub-menu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项一</el-menu-item>
      <el-menu-item index="1-2">选项二</el-menu-item>
    </el-sub-menu>
    <!-- 具体菜单项 -->
     <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <template #title>导航四</template>
     </el-menu-item>
   </el-menu>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router =useRouter()
console.log(router.getRoutes())
</script>

<style>

</style>