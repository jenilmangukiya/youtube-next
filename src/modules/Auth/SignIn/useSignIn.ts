import { useRouter } from "next/navigation";

import { useAuth } from "@app/Auth";
import { useSnackbar } from "@app/components";
import { useLoginUser } from "@app/services";

export const useSignIn = () => {
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated, setUser } = useAuth();
  const { setSnackbarConfig } = useSnackbar();

  const { mutate: loginMutation } = useLoginUser({
    onError: () => {
      setSnackbarConfig({
        open: true,
        message: "LoggedIn Failed",
        severity: "error"
      });
      setIsAuthenticated(false);
    },
    onSuccess: (response) => {
      const user = response?.data?.data.user;
      if (user) {
        setIsAuthenticated(true);
        setUser({
          email: user.email,
          fullName: user.fullName,
          userId: user._id,
          username: user.username
        });
        setSnackbarConfig({
          open: true,
          message: "LoggedIn SuccessFully",
          severity: "success"
        });
        router.push("/");
      } else {
        setIsAuthenticated(false);
        setSnackbarConfig({
          open: true,
          message: "LoggedIn Failed",
          severity: "error"
        });
      }
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    loginMutation({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  return { isAuthenticated, handleSubmit };
};
