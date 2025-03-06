import { windows } from "@/app/types";

export interface IAppIcon {
  windowName: windows;
  label: string;
  image: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}
