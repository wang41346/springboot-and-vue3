import { login } from '@/api/sys';  
import { TOKEN } from '@/constant';
import { setItem,getItem } from '@/utils/storage';
import CryptoJS from 'crypto-js'; // 修改这里，使用 crypto-js    
  
export default {  
  namespaced: true,  
  state: () => ({
    token:getItem(TOKEN) ||''
  }),  
  mutations: {
    setToken(state ,token){
      state.token =token
      setItem(TOKEN,token)
    }
  },  
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
            this.commit('user/setToken', data.data.data.token)
            resolve()
          })  
          .catch(err => {  
            reject(err);  
          });  
      });  
    }  
  }  
};