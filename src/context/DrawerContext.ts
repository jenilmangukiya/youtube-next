import { Dispatch, SetStateAction, createContext } from "react";

type DrawerContextType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const defaultValue: DrawerContextType = {
  isSidebarOpen: true,
  setIsSidebarOpen: () => {}
};
const DrawerContext = createContext(defaultValue);

export default DrawerContext;
