/* eslint-disable*/
import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      loginId: "",
      loginPw: "",
    },
  },
  getters: {
    LOGINID: (state) => { return state.user.loginId },
    LOGINPW: (state) => { return state.user.loginPw },
    USER: (state) => { return state.user },
  },
  mutations: {
    SET_USER_LOGINID: (state, payload) => { state.user.loginId = payload; },
    SET_USER_LOGINPW: (state, payload) => { state.user.loginPw = payload; },
  },
  actions: {},
  modules: {},
});
