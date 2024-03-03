import { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}
