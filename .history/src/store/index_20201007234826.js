import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    usersToDisplay: [],
    userDisplayLimit: 10
  },
  getters: {
    users: state => state.users,
    users2display: state => state.usersToDisplay
  },
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
      if (e === parseInt(e)) {
        this.userDisplayLimit = e
      } else {
        this.userDisplayLimit = parseInt(e.target.value)
      }
      commit('setFilterUsersToDisplay', this.userDisplayLimit)
    }
  },
  modules: {}
})
