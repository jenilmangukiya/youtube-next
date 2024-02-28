import { Dispatch, SetStateAction } from "react";

export interface UserType {
  username: string;
  email: string;
  userId: string;
  fullName: string;
}

export interface AuthContextType {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
  isAuthenticated: Boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}
