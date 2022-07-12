/* eslint-disable prettier/prettier */
import { createStore } from "vuex";
import { FETCH_TODO_LIST, FETCH_TODO, EDIT_TODO } from "@/api/index.js"

export default createStore({
  state: {
    todo_list: [],
    find_todo: {
      id: null,
      todo: "",
      status: "",
    },
  },
  getters: {
    TODO_LIST: (state) => { return state.todo_list },
    FIND_TODO: (state) => { return state.find_todo },
  },
  mutations: {
    SET_TODO_LIST: (state, payload) => { state.todo_list = payload },
    SET_FIND_TODO: (state, payload) => { state.find_todo = payload },
    SET_FIND_TODO_MEMO: (state, payload) => { state.find_todo.memo = payload },
    SET_FIND_TODO_STATUS: (state, payload) => { state.find_todo.status = payload },
  },
  actions: {
    SET_TODO_LIST: async ({ commit }) => {
     const result = await FETCH_TODO_LIST();
      commit("SET_TODO_LIST", result.data)
    },
    FETCH_TODO: async ({ getters, commit }, payload) => {
      const result = await FETCH_TODO({id: getters.TODO_LIST.length, memo: payload, status: "created"});
      commit("SET_TODO_LIST", result.data)
    },
    SET_FIND_TODO: ({ commit }, payload) => {
      commit("SET_FIND_TODO", payload);
    },
    SET_FIND_TODO_STATUS: ({ commit }, payload) => {
      commit("SET_FIND_TODO_STATUS", payload)
    },
    Edit_TODO_LIST: async({ getters, commit }) => {
      const result = await EDIT_TODO(getters.FIND_TODO)
      commit("SET_TODO_LIST", result.data)
    },
  },
  modules: {},
});
