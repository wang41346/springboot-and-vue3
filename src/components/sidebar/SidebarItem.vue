<template>
  <!-- 支持渲染多级menu菜单 -->
   <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
    </template>
    <!-- 循环渲染 -->
     <sidebar-item
     v-for="item in route.children"
     :key="item.path"
     :route="item"
     ></sidebar-item>
   </el-sub-menu>
   <!-- 渲染 item项 -->
    <el-menu-item v-else :index="route.path">
      <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
    </el-menu-item>
</template>

<script setup>
import MenuItem  from './MenuItem.vue';
import { defineProps } from 'element-plus';

//定义props
defineProps({
  route:{
    type:Object,
    Required:ture
  }
})
</script>
