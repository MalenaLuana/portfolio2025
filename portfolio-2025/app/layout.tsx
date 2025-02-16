"use client";
import { WindowsProvider } from "@/context/windowsContext";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import {Lexend_Exa } from 'next/font/google'
 
const lexendFont = Lexend_Exa({weight:'400', subsets: ['latin'] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexendFont.className}>
        <WindowsProvider>
          {children}
          <NavBar />
        </WindowsProvider>
      </body>
    </html>
  );
}
