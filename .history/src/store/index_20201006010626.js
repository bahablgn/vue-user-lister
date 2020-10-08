import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "Welcome",
    username: "bahablgn"
  },
  getters: {
    //welcomeMessage: state => state.message + " " + state.username
    welcomeMessage: state => `${state.message} , ${state.username}`
  },
  // must be sync, cant use for api call from server like fetch()
  mutations: {
    setUserName: (state, payload) => {
      state.username = payload;
    }
  },
  // can be use async for ex: api call from server
  actions: {
    updateUserName: ({ commit }, payload) => {
      commit("setUserName", payload);
    }
  },
  modules: {}
});
