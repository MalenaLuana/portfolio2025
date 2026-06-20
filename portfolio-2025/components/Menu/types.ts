import { windows } from "@/app/types";
import { WindowData } from "@/context/types";
import { Dispatch, SetStateAction } from "react";

export interface MenuProps {
  open: boolean;
  setOpenSettings: Dispatch<SetStateAction<boolean>>;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export interface IContentMenu {
  openWindows: { [key in windows]?: WindowData };
  toggleWindow: (
    windowName: windows,
    value: boolean,
    toggleAll?: boolean,
  ) => void;
  setOpenSettings: Dispatch<SetStateAction<boolean>>;
}
