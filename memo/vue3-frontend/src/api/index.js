import axios from "axios";

export const FETCH_MEMO_LIST = () => axios.get("/api/memos");

export const CREATE_MEMO = (payload) => axios.post("/api/memos", payload);

export const UPDATE_MEMO_LIST = (payload) => axios.put('/api/memo', payload)