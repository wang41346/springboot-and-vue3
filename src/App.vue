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
  background-image: url('./assets/素材1-登录背景.jpg');
  background-size: cover;
  background-position: center;   
  background-repeat: no-repeat;
}
</style>