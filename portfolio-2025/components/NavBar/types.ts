import { windows } from "@/app/types";

export interface INavBar {
  toggleWindow: (window: windows, value: boolean) => void;
}
