import axios from "axios";

// Dynamically set the BASE_URL based on the environment
const BASE_URL = process.env.REACT_APP_API_URL;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
