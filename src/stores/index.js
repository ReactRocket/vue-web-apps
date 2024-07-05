import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state: {
    count: 0,
    baseURL:'/'
  },
  mutations: {
    getBaseUrl(state){
      state.baseURL = window.location.pathname
    },
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    getBaseUrl({commit}){
      commit('getBaseUrl')
    },
    increment({ commit }) {
      commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    },
  },
})