"use client";
import { WindowsProvider } from "@/context/windowsContext";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Lexend_Exa } from "next/font/google";
import { WallpaperProvider } from "@/context/wallpaperContext";
import { LayoutBox } from "./styles";

const lexendFont = Lexend_Exa({ weight: "400", subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexendFont.className}>
        <WindowsProvider>
          <WallpaperProvider>
            <LayoutBox>
              {children}
              <NavBar />
            </LayoutBox>
          </WallpaperProvider>
        </WindowsProvider>
      </body>
    </html>
  );
}
