"use client";
import { windows } from "@/app/types";
import { createContext, useContext, useState, ReactNode } from "react";
import { WindowData, WindowsContextType, windowsTitle } from "./types";

const WindowsContext = createContext<WindowsContextType | undefined>(undefined);

export const WindowsProvider = ({ children }: { children: ReactNode }) => {
  const [openWindows, setOpenWindows] = useState<{
    [key in windows]?: WindowData;
  }>({
    [windows.user]: {
      isOpen: false,
      position: { x: 0, y: 0 },
      ref: null,
      title: windowsTitle.user,
      zIndex: 3,
    },
    [windows.snakeGame]: {
      isOpen: false,
      position: { x: 0, y: 0 },
      ref: null,
      title: windowsTitle.snakeGame,
      maximized: true,
      zIndex: 4,
    },
    [windows.fileExplorer]: {
      isOpen: false,
      position: { x: 0, y: 0 },
      ref: null,
      title: "",
      zIndex: 5,
    },
  });

  const toggleWindow = (windowName: windows, value: boolean) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: {
        isOpen: value,
        position: prev[windowName]?.position || { x: 0, y: 0 },
        title: prev[windowName]?.title || "",
      },
    }));
    if (value) bringWindowToFront(windowName);
  };

  const setWindowPosition = (windowName: windows, x: number, y: number) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: {
        isOpen: prev[windowName]?.isOpen ?? false,
        position: { x, y },
        title: prev[windowName]?.title || "",
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
        title: prev[windowName]?.title || "",
      },
    }));
  };

  const toggleMaximized = (windowName: windows, value: boolean) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: {
        isOpen: prev[windowName]?.isOpen ?? false,
        position: prev[windowName]?.position ?? { x: 0, y: 0 },
        maximized: value,
        title: prev[windowName]?.title || "",
      },
    }));
  };

  const bringWindowToFront = (windowName: windows) => {
    const highestZIndex = Math.max(
      ...Object.values(openWindows).map((w) => w?.zIndex ?? 0),
      0
    );
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: {
        ...prev[windowName],
        zIndex: highestZIndex + 1, // Asigna el zIndex más alto a la ventana
      },
    }));
  };

  return (
    <WindowsContext.Provider
      value={{
        openWindows,
        toggleWindow,
        setWindowPosition,
        setWindowRef,
        toggleMaximized,
        bringWindowToFront,
      }}
    >
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
