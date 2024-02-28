import { useAuth } from "@app/Auth";
import { useLoginUser } from "@app/services";

export const useSignIn = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useAuth();

  const { mutate: loginMutation } = useLoginUser({
    onError: () => {
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
      } else {
        setIsAuthenticated(false);
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
