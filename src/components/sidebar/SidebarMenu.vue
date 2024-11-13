<template>
  <!-- 一级menu菜单 -->
   <el-menu
   :background-color="$store.getters.cssVar.menuBg"
   :text-color="$store.getters.cssVar.menuText"
   :active-text-color="$store.getters.cssVar.menuActiveText"
   :unique-opened="true"
   >
   <sidebar-item 
   v-for="item in routes"
   :key="item.path"
   :route="item"
   router
   :default-active="activeMenu"
   ></sidebar-item>
   </el-menu>
</template>

<script setup>
import { filterRouters,gengerateMenus } from '@/utils/route';
import {  computed } from 'vue';
import { useRouter } from 'vue-router'

const router =useRouter()
const routes =computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return gengerateMenus(filterRoutes)
})
console.log(JSON.stringify(routes.value))

//高亮menu的方法
const route = useRouter()
const activeMenu =computed(() => {
  const {path} =route
  return path
})
</script>

<style>

</style>