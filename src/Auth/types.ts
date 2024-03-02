import { Dispatch, SetStateAction } from "react";

import { AxiosRequestConfig } from "axios";

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

export interface RetryQueueItem {
  resolve: (value?: any) => void;
  reject: (error?: any) => void;
  config: AxiosRequestConfig;
}

export interface AxiosResponseInterceptorsProps {
  children: React.ReactNode;
}
