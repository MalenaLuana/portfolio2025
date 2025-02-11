"use client";
import { windows } from "@/app/types";
import { createContext, useContext, useState, ReactNode } from "react";

interface WindowsContextType {
  openWindows: { [key in windows]?: boolean };
  toggleWindow: (windowName: windows, value: boolean) => void;
}

const WindowsContext = createContext<WindowsContextType | undefined>(undefined);

export const WindowsProvider = ({ children }: { children: ReactNode }) => {
  const [openWindows, setOpenWindows] = useState<{
    [key in windows]?: boolean;
  }>({
    [windows.user]: false,
  });

  const toggleWindow = (windowName: windows, value: boolean) => {
    setOpenWindows({
      [windowName]: value,
    });
  };

  return (
    <WindowsContext.Provider value={{ openWindows, toggleWindow }}>
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
