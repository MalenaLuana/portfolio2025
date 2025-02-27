import { windows } from "@/app/types";
import { Axis } from "@mui/material/Slider/useSlider.types";
import { ReactNode } from "react";

export interface IDraggable {
  children: ReactNode;
  windowKey: windows;
  top?: number;
  left?: number;
  axis?: Axis;
  handle?: boolean;
  style?: React.CSSProperties;
}

export enum resizeDirection {
  horizontal = "horizontal",
  vertical = "vertical",
}

export type windowSize = { width: number; height: number };
