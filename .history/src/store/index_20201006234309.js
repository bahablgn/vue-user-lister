import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "Welcome",
    username: "bahablgn",
    users: []
  },
  getters: {
    //welcomeMessage: state => state.message + " " + state.username
    welcomeMessage: state => `${state.message} , ${state.username}`,
    allUsers: state => state.users
  },
  // must be sync, cant use for api call from server like fetch()
  // can not debug from debug tools, can not see each funciton call from devtools
  mutations: {
    setUserName: (state, payload) => {
      state.username = payload;
    },
    setUsers: (state, payload) => {
      state.users = payload;
    }
  },
  // can be use async for ex: api call from server
  actions: {
    updateUserName: ({ commit }, payload) => {
      commit("setUserName", payload);
    },
    async fetchUsers({ commit }) {
      let res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const res2 = await res.json();
      console.log(res2);
      commit("setTodos", res2);
    }
  },
  modules: {}
});
