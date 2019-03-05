import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: navigator.language.substr(0, 2),
    githubUser: {},
    gcUser: {}
  },
  mutations: {
    setItem (state, { key, value }) {
      Vue.set(state, key, value)
    }
  },
  actions: {
    async reloadGithubUser ({ commit, state }, { username }) {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      if (response.status === 200) {
        commit('setItem', { key: 'githubUser', value: response.data })
      }
    },
    async reloadGeocachingUser ({ commit, state }, { username }) {
      const response = await axios.get(`/geocaching?u=${username}`)
      if (response.status === 200) {
        commit('setItem', { key: 'gcUser', value: response.data })
      }
    }
  }
})
