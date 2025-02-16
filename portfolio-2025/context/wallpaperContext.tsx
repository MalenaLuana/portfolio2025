import { createContext, useContext, useState, ReactNode } from "react";
import defaultImage from "@/public/images/cuadricula_back.jpg";
interface WallpaperContextType {
  wallpaperImage: string;
  setWallpaperImage: (image: string) => void;
}

const WallpaperContext = createContext<WallpaperContextType | undefined>(
  undefined
);

export const WallpaperProvider = ({ children }: { children: ReactNode }) => {
  const [wallpaperImage, setWallpaperImage] = useState<string>(
    defaultImage.src
  );

  return (
    <WallpaperContext.Provider value={{ wallpaperImage, setWallpaperImage }}>
      {children}
    </WallpaperContext.Provider>
  );
};

export const useWallpaper = () => {
  const context = useContext(WallpaperContext);
  if (!context) {
    throw new Error("useWallpaper debe usarse dentro de un WallpaperProvider");
  }
  return context;
};
