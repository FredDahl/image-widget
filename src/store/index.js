import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSmallDevice: false,
  },
  mutations: {
    setIsSmallDevice(state, payload) {
      state.isSmallDevice = payload;
    }
  },
  getters: {
    getIsSmallDevice: state => state.isSmallDevice,
  },
  actions: {
  },
  modules: {
  }
})
