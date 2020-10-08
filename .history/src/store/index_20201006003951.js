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
  mutations: {},
  actions: {
    updateUserName: (context, payload) => {
      
    }
  },
  modules: {}
});
