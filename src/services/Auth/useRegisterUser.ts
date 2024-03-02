import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosAuth } from "@app/Auth";

import { REGISTER_USER } from "./AuthApiRoutes";

const registerUser = async (data: any) => {
  return await axiosAuth.post(REGISTER_USER, data);
};

const useRegisterUser = (
  queryParams?: UseMutationOptions<any, Error, string | undefined, unknown>
) =>
  useMutation<any, AxiosError, any>({
    mutationFn: registerUser,
    ...queryParams
  });

export default useRegisterUser;
