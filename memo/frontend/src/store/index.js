import { createStore } from "vuex";
import { FETCH_MEMO_LIST, CREATE_MEMO, UPDATE_MEMO_LIST, DELETE_MEMO_LIST } from "@/api/index.js";

export default createStore({
  state: {
    all_memo_list: [],
    isModal: false,
    findMemo: {
      id: "",
      memo: "",
    }
  },
  getters: {
    ALL_MEMO_LIST: (state) => { return state.all_memo_list },
    ISMODAL: (state) => { return state.isModal },
    FINDMEMO: (state) => { return state.findMemo }
  },
  mutations: {
    SET_ALL_MEMO_LIST: (state, payload) => { state.all_memo_list = payload },
    SET_ISMODAL: (state,payload) => ( state.isModal = payload ),
    SET_FINDMEMO_ID: (state, payload) => { state.findMemo.id = payload },
    SET_FINDMEMO_MEMO: (state, payload) => { state.findMemo.memo = payload },
  },
  actions: {
    SET_ALL_MEMO_LIST: async ({ commit }) => {
      const result = await FETCH_MEMO_LIST();
      commit('SET_ALL_MEMO_LIST', result.data);
    },
    CREATE_MEMO: async ({ commit }, payload) => {
      const result = await CREATE_MEMO({ memo: payload.value });
      commit('SET_ALL_MEMO_LIST', result.data);
    },
    SET_FINDMEMO: ({ getters, commit }, payload) => {
      const result = getters.ALL_MEMO_LIST.find(memo => memo.id === payload)
      commit('SET_FINDMEMO_ID', result.id);
      commit('SET_FINDMEMO_MEMO', result.memo);
    },
    UPDATE_MEMO_LIST: async ({ commit }, payload) => {
      const result = await UPDATE_MEMO_LIST(payload);
      commit('SET_ALL_MEMO_LIST', result.data);
    },
    DELETE_MEMO_LIST: async ({ commit }, payload) => {
      const result = await DELETE_MEMO_LIST(payload);
      commit('SET_ALL_MEMO_LIST', result.data);
    }
  },
});
