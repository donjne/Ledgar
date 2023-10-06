import axios from "axios";

// Access the environment variable using process.env
const BASE_URL = process.env.NEXT_PUBLIC_SOLSCAN_API_URI;
console.log(BASE_URL);

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default axiosPrivate;
