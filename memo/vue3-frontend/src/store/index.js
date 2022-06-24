import { createStore } from "vuex";
import { FETCH_MEMO_LIST, CREATE_MEMO } from "@/api/index.js";

export default createStore({
  state: {
    memo_list: [],
  },
  getters: {
    MEMO_LIST: (state) => { return state.memo_list },
  },
  mutations: {
    SET_MEMO_LIST: (state, payload) => { state.memo_list = payload}
  },
  actions: {
    SET_MEMO_LIST: async ({ commit }) => {
      const result = await FETCH_MEMO_LIST();
      commit('SET_MEMO_LIST', result.data);
    },
    
  },
});
