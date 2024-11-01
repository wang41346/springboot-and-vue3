import { createStore } from 'vuex'
import user from './modules/user.js'
import getters from './getters'
export default createStore({
  modules: {
    user,
    getters
  }
})