import axios from "axios";

import { BASE_URL } from "@app/constants";

const HEADERS: any = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const instance = axios.create({
  withCredentials: true
});

instance.interceptors.request.use((config) => {
  config.baseURL = BASE_URL;

  config.headers = {
    ...HEADERS,
    ...config.headers
  };

  return config;
});

export default instance;
