import React from "react";

export const AuthHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return { Authorization: token };
  } else {
    localStorage.removeItem("token");
    navigate("/login");
    return {};
  }
};
