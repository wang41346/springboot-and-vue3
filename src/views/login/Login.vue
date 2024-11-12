<template class="backgroud">
  <div class="backgroud">
  <el-card class="login-card">
    <h2 class="login-title">登录</h2>
    <el-form :model="loginForm" :rules="rules" ref="loginFormRef" label-position="top">
      <el-form-item label="用户名" prop="username">
        <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            clearable
            prefix-icon="el-icon-user"
        >
          <template #prefix>
            <User class="icon" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="请输入密码"
            show-password
            prefix-icon="el-icon-lock"
        >
          <template #prefix>
            <Lock class="icon" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-button" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { ElForm } from 'element-plus'
import { User, Lock,} from '@element-plus/icons-vue'
import { validatePassword } from './login';
import { useRouter } from 'vue-router';

const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})
const rules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})

//登录动作处理
const router =useRouter()
const loginFormRef =ref(null)
const handleLogin =()=>{
  loginFormRef.value.validate((valid) => {
    if (valid) {
      console.log('登录信息:', loginForm.value)
      router.push('/')
    } else {
      console.log('表单验证失败') 
      return false
    }
  })
}
</script>

<style scoped>
.backgroud{
  display: flex;  
  justify-content: center;  
  align-items: center;      
  height: 100vh;
  background-image: url('/src/assets/素材1-登录背景.jpg');
  background-size: cover;
  background-position: center;   
  background-repeat: no-repeat;
}
.login-card {
  width: 400px;
  height: 400px;
  margin: 27px auto;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color:rgba(255,255,255,0.8);
}

.login-title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  color: #333333;
}

.el-input {
  border-radius: 5px;
  transition: border-color 0.3s;
}

.el-input:hover .el-input__inner {
  border-color: #409EFF;
}

.el-input__inner {
  padding-left: 40px; 
}

.icon {
  color: #409EFF;
  font-size: 18px;
}

.login-button {
  width: 100%;
  border-radius: 5px;
  background-color: #409EFF;
  color: #ffffff;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #66b1ff;
}

.el-form-item {
  margin-bottom: 20px;
}
</style>
