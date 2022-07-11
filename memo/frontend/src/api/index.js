import axios from "axios";

export const FETCH_TODO_LIST = () => axios.get("/api/todolist");

export const FETCH_TODO = (payload) => axios.post("/api/todolist", payload);
