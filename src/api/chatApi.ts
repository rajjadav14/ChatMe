import axios from "axios";
import { ILogin, ISignUp } from "../@types/types";
import { getJWTToken } from "../utils/storageService";

const API_BASE_URL = "http://localhost:6002/api";

export const loadContacts = async (): Promise<any> => {
  const url = `${API_BASE_URL}/chat/load-contacts`;

  const options = {
    method: "GET",
    url,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`,
    },
  };

  try {
    const result: { name: string; message: string; email: string }[] = [];
    const response = await axios.request(options);

    for (let i = 0; i < response.data.data.result.length; i++) {
      result.push({
        name: response.data.data.result[i].userName,
        message: response.data.data.result[i].content,
        email: response.data.data.result[i].email,
      });
    }

    return result;
  } catch (e) {
    console.log("error ");
    return [{ name: "error", message: "error" }];
  }
};

export const loadChatBox = async (contact: string) => {
  const url = `${API_BASE_URL}/chat/load-chatbox?contact=${contact}`;
  const options = {
    method: "GET",
    url,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data.chatHistory;
  } catch (e) {
    return [{ message: "error" }];
  }
};
