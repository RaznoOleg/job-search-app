import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
const API_HOST = process.env.NEXT_PUBLIC_RAPIDAPI_HOST;
const CLIENT_API_URL = process.env.NEXT_PUBLIC_CLIENT_API_URL;

const clientApi = axios.create({
  baseURL: CLIENT_API_URL,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': API_HOST,
  },
});

export default clientApi;