import Vue from 'vue'
import Vuex from 'vuex'

const extend = Vue.prototype
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    keyword: '',
    user: null,
    cartCount: null,
    cartProductId: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setKeyword(state, keyword) {
      state.keyword = keyword
    },
    setUser(state, user) {
      state.user = user
    },
    setCartCount(state, cartCount) {
      state.cartCount = cartCount
    },
    setCartProductId(state, productId) {
      state.cartProductId = productId
    }
  },
  actions: {},
  modules: {}
})

// sessionStorage.setItem('token', res.data.data)