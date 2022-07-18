import axios from "axios";

export const FETCH_TODO_LIST = () => axios.get("/api/todolist");

export const FETCH_TODO = (payload) => axios.post("/api/todolist", payload);

export const EDIT_TODO = (payload) => axios.put("/api/todolist", payload);

export const CHANGE_STATUS = (payload) => axios.put("/api/status", payload);

export const CHANGE_LIST = (payload) => axios.post("/api/orderlist", payload);
