import axios from "axios";
import { BACKEND_BASE } from "./config";


const authState = JSON.parse(localStorage?.getItem('auth') ?? "")
const auth = authState?.state

const axiosInstance = axios.create({
  baseURL: BACKEND_BASE,
  headers: { Authorization: auth ? `Bearer ${auth?.token}` : undefined }
});

export default axiosInstance;
