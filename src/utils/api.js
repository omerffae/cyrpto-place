import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "YOUR_API_KEY",
  },
});

export default api;
