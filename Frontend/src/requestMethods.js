import axios from "axios";

// Dynamically set the BASE_URL based on the environment
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://backend-repo-wndn.onrender.com/api/v1" // Deployed backend URL
    : "http://localhost:8000/api/v1"; // Localhost URL

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
