"use client";
import { MainContainer } from "./styles";
import { windows } from "./types";
import { useWindows } from "@/context/windowsContext";
import { ReactElement } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "@/components/Draggable";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { WeatherWidget } from "@/modules/wheatherWidget";
import { useWallpaper } from "@/context/wallpaperContext";
import { SnakeGame } from "@/modules/snakeGame";
import { AppIcon } from "@/components/AppIcon";
import snakeImg from "@/public/images/Snake.png";
import { UserProfile } from "@/modules/userProfile";

export default function Home() {
  const { openWindows, setWindowPosition } = useWindows();
  const { wallpaperImage } = useWallpaper();

  const windowsComponents: Record<windows, ReactElement> = {
    [windows.user]: <UserProfile />,
    [windows.snakeGame]: <SnakeGame />,
  };

  return (
    <MainContainer backgroundImage={wallpaperImage}>
      <DndContext
        modifiers={[restrictToWindowEdges]}
        onDragEnd={({ delta, active }) => {
          const windowKey = active.id as windows;
          const windowData = openWindows[windowKey];

          if (windowData) {
            const { x, y } = windowData.position;
            setWindowPosition(windowKey, x + delta.x, y + delta.y);
          }
        }}
      >
        {Object.keys(openWindows)
          .filter(
            (windowName): windowName is windows =>
              windowName in windowsComponents
          )
          .map((windowName) => {
            const windowKey = windowName as windows;
            const windowData = openWindows[windowKey];
            return (
              openWindows[windowKey]?.isOpen && (
                <Draggable
                  top={windowData?.position.y ?? 300}
                  left={windowData?.position.x}
                  key={windowKey}
                  windowKey={windowKey}
                >
                  {windowsComponents[windowKey]}
                </Draggable>
              )
            );
          })}
      </DndContext>
      <AppIcon
        image={snakeImg.src}
        windowName={windows.snakeGame}
        label="Snake Game"
      />
      <WeatherWidget />
    </MainContainer>
  );
}
