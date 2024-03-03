import { Dispatch, SetStateAction } from "react";

export interface HeaderProps {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}
