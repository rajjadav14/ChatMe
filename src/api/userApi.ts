import axios from "axios";
import { ILogin, ISignUp } from "../@types/types";

const API_BASE_URL = "http://localhost:6002/api";

export const login = async (obk: ILogin) => {
  const url = `${API_BASE_URL}/user/login`;
  const options = {
    method: "POST",
    url,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    data: obk,
  };

  try {
    const response = await axios.request(options);
    return {
      status: response.data.status,
      message: response.data.message,
      token: response.data?.data?.accessToken,
    };
  } catch (e) {
    return {
      status: 400,
      message: "Invalid credentials",
    };
  }
};

export const signUp = async (obk: ISignUp) => {
  const API_BASE_URL = "http://localhost:6002/api";
  const url = `${API_BASE_URL}/user/signup`;

  const options = {
    method: "POST",
    url,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    data: obk,
  };
  try {
    const response = await axios.request(options);
    return {
      status: response.data.status,
      message: response.data.message,
    };
  } catch (e) {
    return {
      status: 400,
      message: "Invalid credentials",
    };
  }
};
