import { useContext } from "react";

import { DrawerContext } from "@app/context";

export const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error("Can not use useDrawer outside context Provider");
  }
  return context;
};
