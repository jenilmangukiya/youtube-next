import { createContext } from "react";

import { SnackbarContextType } from "./types";

const defaultContextValue: SnackbarContextType = {
  snackbarConfig: { message: "", open: false, severity: "success" },
  setSnackbarConfig: () => {}
};

export const SnackbarContext = createContext(defaultContextValue);
