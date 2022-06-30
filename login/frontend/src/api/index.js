import axios from "axios";

export const FETCH_USER = () => axios.get("/api/account");

export const POST_LOGIN = (payload) => axios.post("/api/account", payload);

export const DELETE_LOGOUT = () => axios.delete("/api/account");
