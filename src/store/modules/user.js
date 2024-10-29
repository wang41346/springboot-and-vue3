import { login } from '@/api/sys';  
import CryptoJS from 'crypto-js'; // 修改这里，使用 crypto-js  
  
export default {  
  namespaced: true,  
  state: () => ({}),  
  mutations: {},  
  actions: {  
    login(context, userInfo) {  
      const { username, password } = userInfo;  
      // 使用 CryptoJS 的 MD5 方法来哈希密码  
      const hashedPassword = CryptoJS.MD5(password).toString();  
  
      return new Promise((resolve, reject) => {  
        login({  
          username,  
          password: hashedPassword // 使用哈希后的密码  
        })  
          .then(data => {  
            resolve(data); // 通常，您可能希望解析登录响应数据  
          })  
          .catch(err => {  
            reject(err);  
          });  
      });  
    }  
  }  
};