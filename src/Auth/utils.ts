import { REFRESH_ACCESS_TOKEN } from "@app/services";
import { axiosAuth } from "@app/utils";

export const refreshAccessToken = async () => {
  try {
    const data = await axiosAuth.post(REFRESH_ACCESS_TOKEN);
    return data;
  } catch (error) {
    console.log("Error Refreshing Token", error);
    return null;
  }
};
