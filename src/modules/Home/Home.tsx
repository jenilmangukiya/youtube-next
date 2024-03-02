"use client";
import { useAuth } from "@app/Auth";

const Home = () => {
  const { user } = useAuth();
  return <div>Hello {user.fullName}</div>;
};

export default Home;
