import axios from "axios";
import { BACKEND_BASE } from "./config";

const axiosInstance = axios.create({
  baseURL: BACKEND_BASE,
});

export default axiosInstance;
