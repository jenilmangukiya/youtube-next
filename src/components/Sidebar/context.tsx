import { createContext, useContext } from "react";

export const DrawerContext = createContext({});

export const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error("Can not use useDrawer outside context Provider");
  }
  return context;
};
