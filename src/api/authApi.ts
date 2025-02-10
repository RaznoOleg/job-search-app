import axios from "axios";

const AUTH_API_URL = process.env.NEXT_PUBLIC_AUTH_API_URL;

const authApi = axios.create({
    baseURL: AUTH_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default authApi;
