import { createContext, useEffect, useState } from "react";

import { jwtDecode } from "jwt-decode";

import PageLoader from "@app/components/PageLoader";
import { getCookie } from "@app/utils";

import { AuthContextType, UserType } from "./types";
import { refreshAccessToken } from "./utils";

const defaultContextValue: AuthContextType = {
  user: { username: "", email: "", userId: "", fullName: "" },
  setUser: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {}
};

export const AuthContext = createContext(defaultContextValue);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserType>({
    username: "",
    email: "",
    userId: "",
    fullName: ""
  });

  useEffect(() => {
    (async () => {
      try {
        const accessToken = getCookie("accessToken");
        if (accessToken) {
          const decodedToken: any = jwtDecode(accessToken);

          if (decodedToken) {
            if (decodedToken.exp < Date.now() / 1000) {
              const accessToken = await refreshAccessToken();

              if (!accessToken) {
                return;
              }
            }
            const userObj = {
              username: decodedToken.username,
              email: decodedToken.email,
              fullName: decodedToken.fullName,
              userId: decodedToken._id
            };
            setUser(userObj);
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.error("Auth ERROR", error);
        setIsLoading(false);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      {isLoading && <PageLoader />}
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
