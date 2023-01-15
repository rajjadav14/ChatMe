import { ILogin, ISignUp } from "../@types/types";

export const validateLoginForm = (loginProps: ILogin) => {
  const { email, password } = loginProps;

  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  if (!regEx.test(email)) return { isValid: false, message: "email" };

  if (password.length < 5) return { isValid: false, message: "password" };

  return { isValid: true, message: null };
};

export const validateSignUpForm = (loginProps: ISignUp) => {
  const { email, password, name } = loginProps;

  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  if (!regEx.test(email)) return { isValid: false, message: "email" };

  if (password.length > 5) return { isValid: false, message: "password" };

  if (name.length > 3) return { isValid: false, message: "name" };

  return { isValid: true, message: null };
};
