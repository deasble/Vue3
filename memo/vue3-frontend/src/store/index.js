import { createStore } from "vuex";
import { FETCH_MEMO_LIST, POST_MEMO_LIST, PUT_MEMO_LIST } from "@/api/index.js"

export default createStore({
  state: {
    memo_list: [],
    find_memo: {
      id: "",
      memo: "",
    },
    todomemo: "",
  },
  getters: {
    MEMO_LIST: (state) => { return state.memo_list },
    MEMO: (state) => { return state.find_memo.memo },
  },
  mutations: {
    SET_MEMO_LIST: (state, payload) => { state.memo_list = payload },
    SET_MEMO: (state, payload) => { state.todomemo = payload },
    SET_FIND_MEMO_ID: (state, payload) => { state.find_memo.id = payload },
    SET_FIND_MEMO_MEMO: (state, payload) => { state.find_memo.memo = payload },
  },
  actions: {
    SET_MEMO_LIST: async ({ commit }) => {
        const result = await FETCH_MEMO_LIST();
        commit('SET_MEMO_LIST', result.data);
    },
    SET_FIND_MEMO: async ({commit, getters}, payload) => {
      const result = getters.MEMO_LIST.find(memo => memo.id === payload);
      commit('SET_FIND_MEMO_ID', result.id);
      commit('SET_FIND_MEMO_MEMO', result.memo);
    },
    POST_MEMO_LIST: async ({ state }) => {
      try {
        await POST_MEMO_LIST(state.todomemo);
      } catch (error) {
        alert(error.response.data.errors[0].msg);
      }
    },
    // {id: findMemo.value.id,memo: memo.value}
    PUT_MEMO_LIST: async (payload) => {
      try {
        await PUT_MEMO_LIST(payload);
      } catch (error) {
        alert(error.response.data.errors[0].msg);
      }
    }
  },
});