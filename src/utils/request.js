import store from '@/store'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { isCheckTimeout } from './auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
export default service
service.interceptors.response.use(
  response =>{
    const { success,message,data} =response.data
    //根据success的成功决定接下来的操作
    if(success){
      return data
    }else{
      //业务错误
      ElMessage.error(message)//错误信息提示
      return Promise.reject(new Error(message))
    }
  },
  error =>{
    //ToDo:将来处理token超时问题
    if(
      error.response&&
      error.response.data&&
      error.response.data.code ===401
    ){
      //token超时
      store.dispatch('user/logout')
    }
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
  
)
//请求拦截器
service.interceptors.request.use(
  config=>{
    //同意注入token
    if(store.getters.token){
      //如何token存在 注入token
      config.headers.Authorization =`Bearer ${store.getters.token}`
      if(isCheckTimeout()){
        //登出操作
        store.dispatch('user/logout')
        return Promise.reject(new Error('token失效'))
      }
    }
    return config
  },
  error =>{
    return Promise.reject(error)
  }
)
