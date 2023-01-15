import { ILogin, ISignUp } from "../@types/types";

export const login = async (obk: ILogin) => {
  //const { email, password } = obk;
  const API_BASE_URL = "http://localhost:6002/api";
  //10.0.2.2:3000

  const url = `${API_BASE_URL}/user/login`;

  const res: any = await fetch(url, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obk),
  });

  return {
    status: res.status,
    message: res.message,
    token: res.data?.accessToken,
  };
};
