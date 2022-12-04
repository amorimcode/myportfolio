import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "http://127.0.0.1:5173/",
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
