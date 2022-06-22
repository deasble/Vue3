import { createStore } from "vuex";
import { FETCH_MEMO_LIST, PUT_MEMO_LIST } from "@/api/index.js"

export default createStore({
  state: {
    MEMO_LIST: [],
    memo: "",
  },
  getters: {
    MEMO_LIST: (state) => { return state.MEMO_LIST },
    MEMO: (state) => { return state.memo },
    GET_MEMO: (state) => { 
        state.MEMO_LIST.find()
     },
  },
  mutations: {
    SET_MEMO_LIST: (state, payload) => { state.MEMO_LIST = payload },
    SET_MEMO: (state, payload) => { state.memo = payload },
  },
  actions: {
    SET_MEMO_LIST: async ({ commit }) => {
        const result = await FETCH_MEMO_LIST();
        commit('SET_MEMO_LIST', result.data);
    },
    POST_MEMO_LIST: (getters) => {
        // await POST_MEMO_LIST(state.memo);
        return getters.MEMO;
    },
    // {id: findMemo.value.id,memo: memo.value}
    PUT_MEMO_LIST: async (payload) => {
        await PUT_MEMO_LIST(payload);
    }
  },
});