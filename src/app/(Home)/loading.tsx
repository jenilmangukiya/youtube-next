import { CircularProgress, Stack } from "@mui/material";

const loading = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <CircularProgress />
    </Stack>
  );
};

export default loading;
