import axios from "axios";
import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { registerStart, registerSuccess, registerFailure } from "./userRedux";

export const login = async (dispatch, user) => {
  try {
    dispatch(loginStart());
    const res = await publicRequest.post("/auth/login/", user);

    dispatch(loginSuccess(res.data));

    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    console.log("Sending registration request:", user);
    const res = await axios.post("https://backend-repo-wndn.onrender.com/api/v1/users", user); // Correct endpoint
    console.log("Registration response:", res.data);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    console.error("Registration failed:", err.response?.data || err.message);
    dispatch(registerFailure(err.response?.data?.message || "Registration failed"));
  }
};