import { createStore } from "vuex";
import { FETCH_MEMO_LIST, POST_MEMO_LIST, PUT_MEMO_LIST,  } from "@/api/index.js";

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
        MEMO_LIST: (state) => { return state.memo_list; },
        TODO_MEMO: (state) => { return state.find_memo.memo; },
    },
    mutations: {
        SET_MEMO_LIST: (state, payload) => { state.memo_list = payload; },
        SET_TODO_MEMO: (state, payload) => { state.todomemo = payload; },
        SET_FIND_MEMO_ID: (state, payload) => { state.find_memo.id = payload; },
        SET_FIND_MEMO_MEMO: (state, payload) => { state.find_memo.memo = payload; },
    },
    actions: {
        SET_MEMO_LIST: async ({ commit }) => {
            const result = await FETCH_MEMO_LIST();
            commit('SET_MEMO_LIST', result.data);
        },
        SET_FIND_MEMO: ({ commit }, payload) => {
            commit('SET_FIND_MEMO_ID', payload.id);
            commit('SET_FIND_MEMO_MEMO', payload.memo);
        },
        POST_MEMO_LIST: async ({ commit, getters }) => {
            try {
                await POST_MEMO_LIST(getters.TODO_MEMO);
                commit("SET_TODO_MEMO", "");
            } catch (error) {
                alert(error.response.data.errors[0].msg);
            }
        },
        // {id: findMemo.value.id,memo: memo.value}
        PUT_MEMO_LIST: async ({commit, state}) => {
            try {
                commit('SET_FIND_MEMO_MEMO', state.todomemo);
                await PUT_MEMO_LIST(state.find_memo);
                commit('SET_FIND_MEMO_ID', "");
                commit('SET_FIND_MEMO_MEMO', "");
            } catch (error) {
                alert(error.response.data.errors[0].msg);
            }
        },
        DELETE_MEMO_LIST: async ({commit}, payload) => {
            console.log(payload);

      
            // await DELETE_MEMO_LIST(JSON.stringify(payload));
        }
    },
});