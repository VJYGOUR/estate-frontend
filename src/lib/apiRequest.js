import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-9ix0.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
