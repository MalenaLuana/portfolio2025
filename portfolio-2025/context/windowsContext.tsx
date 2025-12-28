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
      initialSize: { width: 1000, height: 400 },
    },
    [windows.snakeGame]: {
      isOpen: false,
      position: { x: 0, y: 0 },
      ref: null,
      title: windowsTitle.snakeGame,
      maximized: false,
      zIndex: 4,
      initialSize: { width: 600, height: 600 },
    },
    [windows.fileExplorer]: {
      isOpen: false,
      position: { x: 0, y: 0 },
      ref: null,
      title: "",
      zIndex: 5,
      initialSize: { width: 800, height: 600 },
    },
  });

  const toggleWindow = (windowName: windows, value: boolean, toggleAll?: boolean) => {
    if (toggleAll) {
      setOpenWindows((prev) => {
        const updated = { ...prev };
        Object.keys(prev).forEach((key) => {
          updated[key as windows] = {
            ...prev[key as windows]!,
            isOpen: value,
          };
        });
        return updated;
      });
      if (value) bringWindowToFront(windowName);
    } else {
      setOpenWindows((prev) => ({
        ...prev,
        [windowName]: {
          ...prev[windowName]!,
          isOpen: value,
        },
      }));
      if (value) bringWindowToFront(windowName);
    }
  };

  const setWindowPosition = (windowName: windows, x: number, y: number) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: {
        ...prev[windowName]!,
        position: { x, y },
      },
    }));
  };

  const setWindowRef = (windowName: windows, ref: HTMLElement | null) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: {
        ...prev[windowName]!,
        ref,
      },
    }));
  };

  const toggleMaximized = (windowName: windows, value: boolean) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: {
        ...prev[windowName]!,
        maximized: value,
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
        zIndex: highestZIndex + 1,
      },
    }));
  };

  const setWindowSize = (windowName: windows, width: number, height: number) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: {
        ...prev[windowName],
        initialSize: { width, height },
      },
    }));
  };

  const toggleSnapped = (windowName: windows, value: 'left' | 'right' | null) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: {
        ...prev[windowName]!,
        snapped: value,
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
        toggleSnapped,
        bringWindowToFront,
        setWindowSize
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
