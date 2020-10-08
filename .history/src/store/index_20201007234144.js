import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    usersToDisplay: [],
    userDisplayLimit: 11
  },
  // must be sync, cant use for api call from server like fetch()
  // can debug from debug tools, can see each funciton call from devtools
  mutations: {
    setUsers: (state, payload) => {
      state.users = payload
    },
    setFilterUsersToDisplay: (state, payload) => {
      state.usersToDisplay = state.users.slice(0, payload)
    }
  },
  // can be use async for ex: api call from server
  actions: {
    async fetchUsers({ commit }) {
      let res = await fetch('https://jsonplaceholder.typicode.com/users')
      res = await res.json()
      commit('setUsers', res)
    },
    filterUsersToDisplay({ commit }, e) {
      this.userDisplayLimit = parseInt(e.target.value)
      commit('setFilterUsersToDisplay', this.userDisplayLimit)
    }
  },
  modules: {},
  getters: {
    users: state => state.users
  }
})
