export const setJWTToken = (JWTtoken: string) => {
  localStorage.setItem("JWTtoken", JWTtoken);
};

export const getJWTToken = () => {
  return localStorage.getItem("JWTtoken");
};
