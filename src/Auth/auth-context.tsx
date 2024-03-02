import { createContext } from "react";

import { AuthContextType } from "./types";

const defaultContextValue: AuthContextType = {
  user: { username: "", email: "", userId: "", fullName: "" },
  setUser: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {}
};

export const AuthContext = createContext(defaultContextValue);
