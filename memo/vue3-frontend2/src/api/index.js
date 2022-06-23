import axios from 'axios';

export const FETCH_MEMO_LIST = () => axios.get("/api/memos");

export const POST_MEMO_LIST = (payload) => axios.post("/api/memos", { memo: payload });

export const PUT_MEMO_LIST = (payload) => axios.put("/api/memo", { id: payload.id, memo: payload.memo });

export const DELETE_MEMO_LIST = (payload) => axios.delete(`/api/memos/:${payload}`);