import { useRouter } from "next/navigation";

import { useAuth } from "@app/Auth";
import { useSnackbar } from "@app/components";
import { useRegisterUser } from "@app/services";

export const useSignUp = () => {
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const { setSnackbarConfig } = useSnackbar();

  const { mutate: registerMutation } = useRegisterUser({
    onError: (error: any) => {
      setSnackbarConfig({
        open: true,
        message: error?.response?.data?.["message"] || "Registration Failed",
        severity: "error"
      });
    },
    onSuccess: (response) => {
      const user = response?.data?.data?.["user"];
      if (user) {
        setSnackbarConfig({
          open: true,
          message: "Registration SuccessFully",
          severity: "success"
        });
        router.replace("/sign-in");
      } else {
        setIsAuthenticated(false);
        setSnackbarConfig({
          open: true,
          message: "Registration Failed",
          severity: "error"
        });
      }
    }
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username")?.toString();
    const fullName = data.get("fullName")?.toString();
    const email = data.get("email")?.toString();
    const password = data.get("password")?.toString();
    const confirm_password = data.get("confirm_password")?.toString();
    if (
      [username, fullName, email, password, confirm_password].some(
        (field) => field?.trim() === ""
      )
    ) {
      setSnackbarConfig({
        open: true,
        message: "All Fields are required",
        severity: "error"
      });
      return;
    }

    if (password !== confirm_password) {
      setSnackbarConfig({
        open: true,
        message: "Confirm Password does not match password",
        severity: "error"
      });
      return;
    }

    await registerMutation({
      username,
      fullName,
      email,
      password
    });
  };

  return { isAuthenticated, handleSubmit, router };
};
