"use client";
import { WindowsProvider } from "@/context/windowsContext";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Pixelify_Sans } from "next/font/google";
import { WallpaperProvider } from "@/context/wallpaperContext";
import { LayoutBox } from "./styles";
import { InitLoader } from "@/modules/initLoader";
import { useState, useEffect } from "react";

const pixelFont = Pixelify_Sans({ weight: "400", subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={pixelFont.className}>
        {isLoading ? (
          <InitLoader />
        ) : (
          <WindowsProvider>
            <WallpaperProvider>
              <LayoutBox>
                {children}
                <NavBar />
              </LayoutBox>
            </WallpaperProvider>
          </WindowsProvider>
        )}
      </body>
    </html>
  );
}
