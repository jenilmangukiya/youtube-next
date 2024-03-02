import React, { useState } from "react";

import { SnackbarAlert } from "./SnackbarAlert";
import { SnackbarContext } from "./SnackbarContext";
import { SnackbarAlertProps } from "./types";

export const SnackbarAlertProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [snackbarConfig, setSnackbarConfig] = useState<
    SnackbarAlertProps["snackbarConfig"]
  >({
    open: false,
    message: "",
    severity: "success"
  });

  return (
    <SnackbarContext.Provider value={{ snackbarConfig, setSnackbarConfig }}>
      {children}
      <SnackbarAlert
        snackbarConfig={snackbarConfig}
        setSnackbarConfig={setSnackbarConfig}
      />
    </SnackbarContext.Provider>
  );
};
