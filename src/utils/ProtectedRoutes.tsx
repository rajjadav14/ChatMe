import React from "react";
import { Navigate } from "react-router-dom";
import { getJWTToken } from "./storageService";

const ProtectedRoute = ({ children }: any) => {
  const token = getJWTToken();

  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
