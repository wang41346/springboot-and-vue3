<template>
  <div id="outside-app">
    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from './views/LoginFrom.vue'
</script>

<style>
#outside-app{
  display: flex;  
  justify-content: center; /* 水平居中 */  
  align-items: center;     /* 垂直居中 */  
  height: 100vh;
  background-image: url('./assets/素材1-登录背景.jpg');
  background-size: cover;
  background-position: center;   
  background-repeat: no-repeat;
}
</style>