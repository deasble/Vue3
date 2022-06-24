import axios from "axios";

export const FETCH_MEMO_LIST = () => axios.get("/api/memos");
