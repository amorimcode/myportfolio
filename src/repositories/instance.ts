import Axios from "axios";

const API_URL = "http://127.0.0.1:5173/";

const axiosInstance = Axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 120000,
});

export const getInstance = () => axiosInstance;

export const getCleanInstance = (url?: string) =>
  Axios.create({
    baseURL: url,
    timeout: 120000,
  });

export default getInstance;
