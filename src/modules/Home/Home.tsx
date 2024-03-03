"use client";
import { Typography } from "@mui/material";

import { useAuth } from "@app/Auth";

const Home = () => {
  const { user } = useAuth();
  return (
    <Typography variant="h4">
      Hello {user.fullName} This is A Dashboard
    </Typography>
  );
};

export default Home;
