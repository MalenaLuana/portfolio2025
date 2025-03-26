import { windows } from "@/app/types";

export interface WindowData {
  isOpen: boolean;
  position: { x: number; y: number };
  ref?: HTMLElement | null;
  title: string;
  maximized?: boolean;
  zIndex: number;
}

export interface WindowsContextType {
  openWindows: { [key in windows]?: WindowData };
  toggleWindow: (windowName: windows, value: boolean) => void;
  setWindowPosition: (windowName: windows, x: number, y: number) => void;
  setWindowRef: (windowName: windows, element: HTMLElement | null) => void;
  toggleMaximized: (windowName: windows, value: boolean) => void;
  bringWindowToFront: (windowName: windows) => void;
}

export const windowsTitle = {
  [windows.user]: "Biografía_del_usuario",
  [windows.snakeGame]: "Snake_Game 🐍",
};
