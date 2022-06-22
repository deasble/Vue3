import { createStore } from "vuex";
import { FETCH_MEMO_LIST, POST_MEMO_LIST, PUT_MEMO_LIST } from "@/api/index.js"

export default createStore({
  state: {
    memo_list: {
      id: "",
      memo: "",
    },
    todomemo: "",
  },
  getters: {
    MEMO_LIST: (state) => { return state.memo_list },
    MEMO: (state) => { return state.memo_list.memo },
  },
  mutations: {
    SET_MEMO_LIST: (state, payload) => { state.memo_list = payload },
    SET_MEMO: (state, payload) => { state.todomemo = payload },
  },
  actions: {
    SET_MEMO_LIST: async ({ commit }) => {
        const result = await FETCH_MEMO_LIST();
        commit('SET_MEMO_LIST', result.data);
    },
    POST_MEMO_LIST: async ({ state }) => {
        await POST_MEMO_LIST(state.todomemo);
    },
    // {id: findMemo.value.id,memo: memo.value}
    PUT_MEMO_LIST: async (payload) => {
        await PUT_MEMO_LIST(payload);
    }
  },
});