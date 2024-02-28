import { useContext } from "react";

import { AuthContext } from "./auth-context";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Can not call useAuth Outside <AuthProvider />");
  }

  return context;
};
