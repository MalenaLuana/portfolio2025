import { color } from "@/utils/constants";
import { iconName } from "../Icon/types";

export interface IButton {
  label?: string;
  icon?: iconName;
  color?: color;
  onClick: () => void;
}
