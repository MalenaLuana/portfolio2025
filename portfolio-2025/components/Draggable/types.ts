import { windows } from "@/app/types";
import { ReactNode } from "react";

export interface IDraggable {
  children: ReactNode;
  windowKey: windows;
  position: { x: number; y: number };
}
