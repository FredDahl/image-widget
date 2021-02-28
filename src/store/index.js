import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSmallDevice: false,
    selectedImage: String,
  },
  mutations: {
    setIsSmallDevice(state, payload) {
      state.isSmallDevice = payload;
    },
    setSelectedImage(state, payload) {
      state.selectedImage = payload;
    }
  },
  getters: {
    getIsSmallDevice: state => state.isSmallDevice, getSelectedImage: state => state.selectedImage,
  },
  actions: {
  },
  modules: {
  }
})
