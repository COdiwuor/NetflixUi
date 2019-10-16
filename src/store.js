import Vue from 'vue'
import Vuex from 'vuex'
import MoviesStore from './vuex/movies/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
      MoviesStore
  }
})
