import axios from "axios";

// Dynamically set the BASE_URL based on the environment
const BASE_URL =  "https://backend-repo-1-nuto.onrender.com/api/v1";
;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
