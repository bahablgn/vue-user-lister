import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Welcome',
    username: 'bahablgn',
    users: [],
    defaultLimitToDisplay: 5,
    usersToDisplay: []
  },
  getters: {
    //welcomeMessage: state => state.message + " " + state.username
    welcomeMessage: state => `${state.message} , ${state.username}`,
    users: state => state.users,
    filteredUsers: state => state.usersToDisplay
  },
  // must be sync, cant use for api call from server like fetch()
  // can debug from debug tools, can see each funciton call from devtools
  mutations: {
    setUserName: (state, payload) => {
      state.username = payload
    },
    setUsers: (state, payload) => {
      state.users = payload
    },
    setFilterUsers: (state, payload) => {
      let newArr = state.users.slice(0, payload)
      console.log(newArr)
      state.usersToDisplay = newArr
    }
  },
  // can be use async for ex: api call from server
  actions: {
    updateUserName: ({ commit }, payload) => {
      commit('setUserName', payload)
    },
    async fetchUsers({ commit }) {
      let res = await fetch('https://jsonplaceholder.typicode.com/users')
      res = await res.json()
      commit('setUsers', res)
    },
    async filterUsers({ commit }, e) {
      // Get selected number
      let limit
      if (e !== parseInt(e)) {
        limit = parseInt(
          e.target.options[e.target.options.selectedIndex].innerText
        )
      } else {
        limit = e
        console.log(e)
      }
      commit('setFilterUsers', limit)
    }
  },
  modules: {}
})