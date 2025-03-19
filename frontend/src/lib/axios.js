import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://talkify-backend-k30b.onrender.com" : "/api",
  withCredentials: true,
});
