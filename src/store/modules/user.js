import { getUserInfo, login } from '@/api/sys';
import { TOKEN } from '@/constant';
import router from '@/router';
import { setTimeStamp } from '@/utils/auth';
import { setItem, getItem, removeAllItem } from '@/utils/storage';
import CryptoJS from 'crypto-js';

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem(TOKEN, token);
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    async login({ commit }, userInfo) {
      const { username, password } = userInfo;
      const hashedPassword = CryptoJS.MD5(password).toString();
      try {
        const response = await login({
          username,
          password: hashedPassword
        });

        // 假设响应数据结构为 { data: { data: { token: '...' } } }
        const token = response.data.data.token;
        commit('setToken', token);

        await setTimeStamp();
      } catch (error) {
        // 处理登录错误
        console.error('Login failed:', error);
        throw error; // 重新抛出错误以便上层调用者可以处理
      }
    },
    async getUserInfo({ commit }) {
      try {
        const response = await getUserInfo();

        // 假设响应数据结构包含 token，这里需要根据实际 API 响应来调整
        // 如果 token 在不同的位置，请相应地修改
        const token = response.data.token || response.token || null; // 示例，根据实际情况调整

        if (token) {
          commit('setToken', token);
        }

        // 如果 getUserInfo 也返回了用户信息，你可以在这里设置它
        // const userInfo = response.data.userInfo || {}; // 示例，根据实际情况调整
        // commit('setUserInfo', userInfo);

        return response; // 返回整个响应，或者根据需要返回部分数据
      } catch (error) {
        // 处理获取用户信息错误
        console.error('Failed to get user info:', error);
        throw error; // 重新抛出错误以便上层调用者可以处理
      }
    },
    logout(){
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
};