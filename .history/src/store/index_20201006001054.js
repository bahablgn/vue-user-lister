import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "Welcome",
    username: "bahablgn"
  },
  getters: {
    welcomeMessage
  },
  mutations: {},
  actions: {},
  modules: {}
});
