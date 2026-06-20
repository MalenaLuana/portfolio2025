import { color } from "@/utils/constants";
import { iconName } from "../Icon/types";
import { PointerEventHandler } from "react";

export interface IButton {
  label?: string;
  icon?: iconName;
  color?: color;
  onClick: () => void;
  className?: string;
  active?: boolean;
  onPointerDown?: PointerEventHandler<HTMLButtonElement> | undefined;
}
