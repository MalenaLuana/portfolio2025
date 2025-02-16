"use client";
import { windows } from "@/app/types";
import { createContext, useContext, useState, ReactNode } from "react";
import { WindowData, WindowsContextType, windowsTitle } from "./types";

const WindowsContext = createContext<WindowsContextType | undefined>(undefined);

export const WindowsProvider = ({ children }: { children: ReactNode }) => {
  const [openWindows, setOpenWindows] = useState<{ [key in windows]?: WindowData }>({
    [windows.user]: { isOpen: false, position: { x: 0, y: 0 }, ref: null, title: windowsTitle.user },
  });

  const toggleWindow = (windowName: windows, value: boolean) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: {
        isOpen: value,
        position: prev[windowName]?.position || { x: 0, y: 0 },
        title: prev[windowName]?.title || ''
      },
    }));
  };

  const setWindowPosition = (windowName: windows, x: number, y: number) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: {
        isOpen: prev[windowName]?.isOpen ?? false,
        position: { x, y },
        title: prev[windowName]?.title || ''
      },
    }));
  };
  const setWindowRef = (windowName: windows, ref: HTMLElement | null) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: {
        isOpen: prev[windowName]?.isOpen ?? false,
        position: prev[windowName]?.position ?? { x: 0, y: 0 },
        ref,
        title: prev[windowName]?.title || ''
      }
    }));
  };

  return (
    <WindowsContext.Provider value={{ openWindows, toggleWindow, setWindowPosition, setWindowRef }}>
      {children}
    </WindowsContext.Provider>
  );
};

export const useWindows = () => {
  const context = useContext(WindowsContext);
  if (!context) {
    throw new Error("useWindows debe usarse dentro de un WindowsProvider");
  }
  return context;
};
