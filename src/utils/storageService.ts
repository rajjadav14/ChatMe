export const setJWTToken = (JWTtoken: string) => {
  localStorage.setItem("JWTtoken", JSON.stringify(JWTtoken));
};

export const getJWTToken = () => {
  localStorage.getItem("JWTtoken");
};
