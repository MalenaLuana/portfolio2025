"use client";
import { WindowsProvider } from "@/context/windowsContext";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WindowsProvider>
          {children}
          <NavBar />
        </WindowsProvider>
      </body>
    </html>
  );
}
