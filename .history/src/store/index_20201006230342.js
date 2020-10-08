import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "Welcome",
    username: "bahablgn",
    todos: []
  },
  getters: {
    //welcomeMessage: state => state.message + " " + state.username
    welcomeMessage: state => `${state.message} , ${state.username}`
  },
  // must be sync, cant use for api call from server like fetch()
  // can not debug from debug tools, can not see each funciton call from devtools
  mutations: {
    setUserName: (state, payload) => {
      state.username = payload;
    },
    setTodos: (state, payload) => {
      state.username = payload;
    }
  },
  // can be use async for ex: api call from server
  actions: {
    updateUserName: ({ commit }, payload) => {
      commit("setUserName", payload);
    },
    fetchTodos: async ({ commit }, payload) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      console.log(res);
      commit("setTodos", payload);
    }
  },
  modules: {}
});