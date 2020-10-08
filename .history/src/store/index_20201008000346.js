import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    tempUsers: []
  },
  getters: {
    users: state => state.users,
    filteredUsers: state => state.tempUsers
  },
  mutations: {
    setUsers: (state, payload) => {
      state.users = payload
    },
    setFilterUsers: (state, payload) => {
      state.tempUsers = state.users.slice(0, payload)
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      let res = await fetch('https://jsonplaceholder.typicode.com/users')
      res = await res.json()
      commit('setUsers', res)
    },
    filterUsers({ commit }, e) {
      let limit = 10
      if (e === parseInt(e)) {
        limit = e
      } else {
        limit = parseInt(e.target.value)
      }
      commit('setFilterUsers', limit)
    }
  },
  modules: {}
})
