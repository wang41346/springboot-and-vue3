<template>
  <div class="navbar">
    <div class="right-menu">
      <el-dropdown class="avatar" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
          shape="square"
          :size="40"
          src="https://picsum.photos/40/40"
          ></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <router-link to="/">
          <el-dropdown-item>首页</el-dropdown-item>
        </router-link>
        <a target="_blank" href="">
          <el-dropdown-item>主页</el-dropdown-item>
        </a>
        <el-dropdown-item divided @click="logout">
          退出登录
        </el-dropdown-item>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
    const store = useStore()
    const logout = () =>{
      store.dispatch('user/logout')
    }
</script>

<style>
.navbar{
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.right-menu{
  display: flex;
  align-items: center;
  float: right;
  padding-right: 16px;
}

.avatar{
  cursor: pointer;
}
.avatar .avatar-wrapper{
  margin-top: 5px;
  position: relative;
}
.avatar .avatar-wrapper .el-avatar{
  --el-avatar-background-color:none;
  margin-right: 12px;
}
</style>