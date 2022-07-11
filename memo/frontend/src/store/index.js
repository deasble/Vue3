/* eslint-disable prettier/prettier */
import { createStore } from "vuex";
import { FETCH_TODO_LIST, FETCH_TODO } from "@/api/index.js"

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
    Edit_TODO_LIST: ({ getters, commit }) => {
      const Find_Todo = getters.FETCH_TODO; 
      getters.TODO_LIST.forEach(todo => {
        if(todo.id === Find_Todo.id) {
          todo = Find_Todo;
        }
      });
    },
  },
  modules: {},
});
