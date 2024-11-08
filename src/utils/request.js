import store from '@/store'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
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
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
  
)
export default service
//请求拦截器
service.interceptors.request.use(
  config=>{
    //同意注入token
    if(store.getters.token){
      //如何token存在 注入token
      config.headers.Authorization =`Bearer ${store.getters.token}`
    }
    return config
  },
  error =>{
    return Promise.reject(error)
  }
)